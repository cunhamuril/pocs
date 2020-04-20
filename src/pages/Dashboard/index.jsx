import React, { useState, useEffect } from "react";
import { Card } from "antd";

import tutorials from "../../mock/tutorials.json";

import ContentWrapper from "../../components/ContentWrapper";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);

  /**
   * Just testing loading
   */
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeOut);
  }, []);

  return (
    <ContentWrapper pageTitle="Dashboard">
      <h1 className="font-bold text-indigo-700 text-center text-xl">
        Proof of Concept - Frameworks CSS with React
      </h1>
      <div className="mt-6 w-full max-w-5xl flex justify-evenly flex-wrap">
        {tutorials.map((tutorial) => (
          <Link key={tutorial.id} to={tutorial.path}>
            <Card
              hoverable
              className="w-64 mb-4"
              style={{ minHeight: "18rem" }}
              cover={
                <img
                  alt={tutorial.title}
                  src={tutorial.thumbnail}
                  className="h-40 object-cover"
                />
              }
              loading={loading}
            >
              <Card.Meta
                title={tutorial.title}
                description={tutorial.description}
              />
            </Card>
          </Link>
        ))}
      </div>
    </ContentWrapper>
  );
};

export default Dashboard;
