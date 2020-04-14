import marked from "marked";

import("highlight.js").then((hljs) => {
  marked.setOptions({
    highlight: (code, lang) => {
      if (lang && hljs.getLanguage) {
        return hljs.highlight(lang, code).value;
      }

      return hljs.highlightAuto(code).value;
    },
  });
});

export default (content) => ({ __html: marked(content) });
