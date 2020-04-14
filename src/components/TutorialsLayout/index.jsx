import React from "react";
import ReactHTMLParser from "react-html-parser";

import marked from "../../config/marked";

import ContentWrapper from "../ContentWrapper";

const AntDesign = ({ content, pageTitle }) => {
  // Replace all occurences ~ to `
  const { __html } = marked(content.replace(/~/g, "`"));

  return (
    <ContentWrapper pageTitle={pageTitle}>
      <h1 className="text-2xl text-blue-700 font-bold">{pageTitle}</h1>
      <div className="mt-4 w-full max-w-5xl">{ReactHTMLParser(__html)}</div>
    </ContentWrapper>
  );
};

export default AntDesign;
