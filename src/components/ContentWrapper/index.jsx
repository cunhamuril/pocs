import React from "react";
import { Breadcrumb } from "antd";

const { Item } = Breadcrumb;

const ContentWrapper = ({ pageTitle, children }) => (
  <>
    <Breadcrumb className="py-4">
      <Item>Home</Item>
      <Item>{pageTitle}</Item>
    </Breadcrumb>

    <div className="bg-white p-6" style={{ minHeight: 580 }}>
      {children}
    </div>
  </>
);

export default ContentWrapper;
