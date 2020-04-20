/* eslint-disable no-useless-escape */
export const content = `This tutorial was made based on this another tutorial: [Controlling File Size](https://tailwindcss.com/docs/controlling-file-size/)

#### 1. Install devDependencies

~~~bash
npm install @fullhuman/postcss-purgecss --save-dev
~~~

OR

~~~bash
yarn add @fullhuman/postcss-purgecss -D
~~~

<br/>

#### 2. Add it as the last plugin in ~postcss.config.js~ and the file gonna be like this:

~~~js
require("dotenv/config");
const tailwindcss = require("tailwindcss");
const purgecss = require("@fullhuman/postcss-purgecss")({
  // Specify the paths to all of the template files in project
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
~~~

Then, create ~.env~ file and add REACT_APP_NODE_ENV property.

~~~js
// In development
REACT_APP_NODE_ENV = "dev";

// When run production build
REACT_APP_NODE_ENV = "production";
~~~

Note that in this example, **we're only enabling Purgecss in production**. We recommend configuring Purgecss this way because it can be slow to run, and during development it's nice to have every class available so you don't need to wait for a rebuild every time you change some HTML.

<br/>

#### 3. Applying Purgecss to Tailwind's utility classes:

Finally, we recommend only applying Purgecss to Tailwind's utility classes, and not to base styles or component classes. The easiest way to do this is to use Purgecss's whitelisting feature to disable Purgecss for non-utility classes:

~~~css
/* purgecss start ignore */
@tailwind base;
@tailwind components;
/* purgecss end ignore */

@tailwind utilities;
~~~

This will ensure you don't accidentally purge important base styles when working with frameworks like Next.js, Nuxt, vue-cli, create-react-app, and others that hide their base HTML template somewhere in your ~node_modules~ directory.

<br/>

### Comparison before and after "purgecss" in Chrome DevTools Audits

#### Before

![before](https://i.imgur.com/klIowJE.png)

#### After

![after](https://i.imgur.com/6yT4uf1.png)`;
