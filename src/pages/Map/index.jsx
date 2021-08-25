import React, { useRef, useState } from "react";
import useSwr from "swr";
import GoogleMapReact from "google-map-react";
import useSupercluster from "use-supercluster";

import custodyIcon from "../../assets/custody.svg";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

const Marker = ({ children }) => children;

function Map() {
  // 1) map setup
  const mapRef = useRef();

  const [zoom, setZoom] = useState(10);
  const [bounds, setBounds] = useState(null);

  // 2) load and format data
  const url =
    "https://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=2019-10";
  const { data, error } = useSwr(url, fetcher);
  const crimes = data && !error ? data : [];
  const points = crimes.map((crime) => ({
    type: "Feature",
    properties: {
      cluster: false,
      crimeId: crime.id,
      category: crime.category,
    },
    geometry: {
      type: "Point",
      coordinates: [
        parseFloat(crime.location.longitude),
        parseFloat(crime.location.latitude),
      ],
    },
  }));

  // 3) get clusters
  const { clusters, supercluster } = useSupercluster({
    points,
    bounds,
    zoom,
    options: { radius: 75, maxZoom: 20 },
  });

  // 4) render map
  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_KEY }}
      defaultCenter={{ lat: 52.629835, lng: -1.133005 }}
      defaultZoom={zoom}
      yesIWantToUseGoogleMapApiInternals
      onGoogleApiLoaded={({ map }) => {
        mapRef.current = map;
      }}
      onChange={({ zoom, bounds }) => {
        setZoom(zoom);
        setBounds([bounds.nw.lng, bounds.se.lat, bounds.se.lng, bounds.nw.lat]);
      }}
      options={{
        mapTypeControl: true,
        gestureHandling: "greedy",
      }}
    >
      {clusters.map((cluster) => {
        const [longitude, latitude] = cluster.geometry.coordinates;
        const { cluster: isCluster, point_count: pointCount } =
          cluster.properties;

        if (isCluster) {
          return (
            <Marker key={cluster.id} lat={latitude} lng={longitude}>
              <div
                className="text-white bg-blue-500 rounded-full p-2 flex justify-center items-center"
                style={{
                  width: `${10 + (pointCount / points.length) * 30}px`,
                  height: `${10 + (pointCount / points.length) * 30}px`,
                }}
                onClick={() => {
                  const expansionZoom = Math.min(
                    supercluster.getClusterExpansionZoom(cluster.id),
                    20
                  );

                  mapRef.current.setZoom(expansionZoom);
                  mapRef.current.panTo({ lat: latitude, lng: longitude });
                }}
              >
                {pointCount}
              </div>
            </Marker>
          );
        }

        return (
          <Marker
            key={cluster.properties.crimeId}
            lat={latitude}
            lng={longitude}
          >
            <button className="border-transparent bg-transparent">
              <img
                src={custodyIcon}
                alt="crime doesn't pay"
                className="w-6 h-6"
              />
            </button>
          </Marker>
        );
      })}
    </GoogleMapReact>
  );
}

export default Map;
