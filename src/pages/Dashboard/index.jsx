import React, { useState, useEffect } from "react";
import { Breadcrumb, Card } from "antd";

import tutorials from "../../mock/tutorials.json";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);

  /**
   * Test loading
   */
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timeOut);
  }, []);

  return (
    <>
      <Breadcrumb className="py-4">
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      </Breadcrumb>

      <div className="bg-white p-6" style={{ minHeight: 580 }}>
        <h1 className="font-bold text-indigo-700 text-center text-xl">
          Proof of Concept - Frameworks CSS with React
        </h1>
        <div className="mt-6 flex items-stretch justify-evenly flex-wrap">
          {tutorials.map((tutorial) => (
            <Card
              key={tutorial.id}
              hoverable
              className="w-64 mb-4"
              cover={<img alt={tutorial.title} src={tutorial.thumbnail} />}
              loading={loading}
            >
              <Card.Meta
                title={tutorial.title}
                description={tutorial.description}
              />
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
