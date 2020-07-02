import React, { useState, useMemo } from "react";
import Cropper from "react-easy-crop";
import { Button, Slider, message } from "antd";

import getCroppedImg from "./cropImage";

function EasyCrop() {
  const [photoFile, setPhotoFile] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [cropperConfig, setCropperConfig] = useState({
    crop: { x: 0, y: 0 },
    zoom: 1,
    aspect: 1 / 1,
    croppedAreaPixels: null,
    isCropping: false,
  });

  const preview = useMemo(() => {
    return photoFile ? URL.createObjectURL(photoFile) : null;
  }, [photoFile]);

  const handleCropChange = (crop) => {
    setCropperConfig({ ...cropperConfig, crop });
  };

  const handleCropComplete = (croppedArea, croppedAreaPixels) => {
    console.log("croppedArea: ", croppedArea);
    console.log("croppedAreaPixels: ", croppedAreaPixels);

    setCropperConfig({ ...cropperConfig, croppedAreaPixels });
  };

  const handleZoomChange = (zoom) => {
    setCropperConfig({ ...cropperConfig, zoom });
  };

  const showResult = async () => {
    try {
      setCropperConfig({ ...cropperConfig, isCropping: true });

      const croppedImage = await getCroppedImg(
        preview,
        cropperConfig.croppedAreaPixels
      );
      console.log("done", { croppedImage });

      setCroppedImage(croppedImage);
      setCropperConfig({ ...cropperConfig, isCropping: false });
    } catch (e) {
      console.error(e);
      setCropperConfig({ ...cropperConfig, isCropping: false });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFile = new File([croppedImage], "test.jpeg");

    message.info("File is on dev tools console");

    console.log(newFile);
  };

  return (
    <div className="m-5">
      <h1 className="text-3xl mb-5">Image crop</h1>

      <form onSubmit={handleSubmit}>
        <input
          className="mb-5"
          type="file"
          name="pic"
          id="pic"
          accept="image/*"
          onChange={(e) => setPhotoFile(e.target.files[0])}
        />

        {preview && (
          <div className="bg-indigo-500 p-1 w-1/3 rounded-lg">
            <label className="text-white">Zoom</label>
            <Slider
              className="mb-5"
              value={cropperConfig.zoom}
              min={1}
              max={3}
              step={0.1}
              onChange={(value) =>
                setCropperConfig({ ...cropperConfig, zoom: value })
              }
            />
          </div>
        )}

        <div className="flex items-center">
          {preview && (
            <div
              className="mr-3 my-5 relative"
              style={{ width: 500, height: 400 }}
            >
              <Cropper
                image={preview}
                crop={cropperConfig.crop}
                zoom={cropperConfig.zoom}
                aspect={cropperConfig.aspect}
                onCropChange={handleCropChange}
                onCropComplete={handleCropComplete}
                onZoomChange={handleZoomChange}
              />
            </div>
          )}

          {croppedImage && (
            <img
              src={croppedImage}
              style={{ width: 400, height: 400 }}
              alt="cropped"
            />
          )}
        </div>

        <Button htmlType="button" onClick={showResult}>
          Show Result
        </Button>
        <Button htmlType="submit">Save</Button>
      </form>
    </div>
  );
}

export default EasyCrop;
