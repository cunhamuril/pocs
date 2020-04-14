import React from "react";
import ReactHTMLParser from "react-html-parser";

import marked from "../../../config/marked";

import ContentWrapper from "../../../components/ContentWrapper";

const AntDesign = () => {
  const content = `
  **1. Install:** ~npm install antd~ or ~yarn add antd~ <br/>
  **2. Import in global styles file:** ~@import "~antd/dist/antd.css"~`;

  // Replace all occurences ~ to `
  const { __html } = marked(content.replace(/~/g, "`"));

  return (
    <ContentWrapper pageTitle="Ant Design">
      <h1 className="text-2xl text-blue-700 font-bold">Ant Design</h1>
      <div className="mt-4 w-full max-w-5xl">{ReactHTMLParser(__html)}</div>
    </ContentWrapper>
  );
};

export default AntDesign;
