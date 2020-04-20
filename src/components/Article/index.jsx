import React from "react";
import ReactHTMLParser from "react-html-parser";

import "./styles.css";

import marked from "../../config/marked";

import ContentWrapper from "../ContentWrapper";

const Article = ({ content, title }) => {
  // Replace all occurences ~ to `
  const { __html } = marked(content.replace(/~/g, "`"));

  return (
    <ContentWrapper pageTitle={title}>
      <article className="flex flex-col items-center w-full">
        <h1 className="text-2xl text-blue-700 font-bold">{title}</h1>
        <div className="mt-4 w-full max-w-5xl">{ReactHTMLParser(__html)}</div>
      </article>
    </ContentWrapper>
  );
};

export default Article;
