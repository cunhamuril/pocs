require("dotenv/config");
const tailwindcss = require("tailwindcss");
const purgecss = require("@fullhuman/postcss-purgecss")({
  content: [
    "./src/**/*.html",
    "./src/**/*.jsx",
    "./src/**/*.js",
    // etc.
  ],

  // Include any special characters you're using in this regular expression
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
});

module.exports = {
  plugins: [
    tailwindcss("./tailwind.js"),
    require("autoprefixer"),
    ...(process.env.REACT_APP_NODE_ENV === "production" ? [purgecss] : []),
  ],
};
