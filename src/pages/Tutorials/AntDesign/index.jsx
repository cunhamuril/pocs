import React from "react";

import TutorialsLayout from "../../../components/TutorialsLayout";

const AntDesign = () => {
  const content = `
  **1. Install:** ~npm install antd~ or ~yarn add antd~ <br/>
  **2. Import in global styles file:** ~@import "antd/dist/antd.css"~`;

  return <TutorialsLayout content={content} pageTitle="Ant Design" />;
};

export default AntDesign;
