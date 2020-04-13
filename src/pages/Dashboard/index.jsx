import React from "react";
import { Breadcrumb } from "antd";

const Dashboard = () => {
  return (
    <>
      <Breadcrumb className="py-4">
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      </Breadcrumb>

      <div className="bg-white p-6" style={{ minHeight: 580 }}>
        <h1>Dashboard</h1>
      </div>
    </>
  );
};

export default Dashboard;
