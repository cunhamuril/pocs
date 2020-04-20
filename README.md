This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Proof of Concept - Frameworks CSS with React

## Tools used

- [Ant Design](https://ant.design/)
- [Tailwind CSS](https://tailwindcss.com/)
- [PostCSS Purgecss](https://github.com/FullHuman/postcss-purgecss)

## Configurations Tutorial

### Ant Design

**1. Install:** `npm install antd` or `yarn add antd`
**2. Import in global styles file:** `@import "~antd/dist/antd.css"`

<hr/>

### Tailwind CSS

\*Recommended to use the VSCode extension: Tailwind CSS IntelliSense

This tutorial was made based on this another tutorial: [Setting Up Tailwind CSS In A React Project](https://www.smashingmagazine.com/2020/02/tailwindcss-react-project)

#### 1. Getting started

**1.1. Install devDependencies:**

```bash
npm install --save-dev tailwindcss postcss-cli autoprefixer
```

OR

```bash
yarn add -D tailwindcss postcss-cli autoprefixer
```

**1.2. Initialize Tailwind CSS by creating the default configurations.**

```bash
npx tailwind init tailwind.js --full
```

This command creates a `tailwind.js` in project’s base directory; the file contains the configuration, such as our colors, themes, media queries, and so on. It’s a useful file that helps with predefined sets of properties which will aid the need to re-brand certain conventions or properties if the need arises.

<br/>

#### 2. Configure [PostCSS](https://github.com/postcss/postcss)

**2.1. Create a PostCSS configuration file in base directory with this name:** `postcss.config.js`

**2.2. Add the following lines of code to `postcss.config.js`:**

```js
const tailwindcss = require("tailwindcss");
module.exports = {
  plugins: [tailwindcss("./tailwind.js"), require("autoprefixer")],
};
```

<br/>

#### 3. Inject Tailwind's components, utilities and base styles on app

**3.1. Create the following file:** `src/themes/tailwind.config.css`

**3.2. Import the base styles and configuration on file `src/themes/tailwind.config.css`:**

```css
@tailwind base;

@tailwind components;

@tailwind utilities;
```

<br/>

#### 4. Configure the app to build CSS

- **Edit the script part on `package.json` file:**

```json
"tailwind:css": "postcss src/theme/tailwind.config.css -o src/theme/tailwind.css",
"start": "npm run tailwind:css && react-scripts start",
"build": "npm run tailwind:css && react-scripts build",
```

<br/>

#### 5. Import CSS

Import the CSS file appropriately to ensure that it’s properly watched and built when we run `npm start` or `yarn start`.

- **Import the `src/theme/tailwind.css` file on `src/index.js`:**

```js
import "./theme/tailwind.css";
```

<br/>

#### 6. Add the `src/theme/tailwind.css` file to `.gitignore` file:

```
/src/theme/tailwind.css
```

<hr/>

### Purgecss

This tutorial was made based on this another tutorial: [Controlling File Size](https://tailwindcss.com/docs/controlling-file-size/)

#### 1. Install devDependencies

```bash
npm install @fullhuman/postcss-purgecss --save-dev
```

OR

```bash
yarn add @fullhuman/postcss-purgecss -D
```

<br/>

#### 2. Add it as the last plugin in `postcss.config.js` and the file gonna be like this:

```js
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
```

Then, create `.env` file and add REACT_APP_NODE_ENV property.

```js
// In development
REACT_APP_NODE_ENV = "dev";

// When run production build
REACT_APP_NODE_ENV = "production";
```

Note that in this example, **we're only enabling Purgecss in production**. We recommend configuring Purgecss this way because it can be slow to run, and during development it's nice to have every class available so you don't need to wait for a rebuild every time you change some HTML.

<br/>

#### 3. Applying Purgecss to Tailwind's utility classes:

Finally, we recommend only applying Purgecss to Tailwind's utility classes, and not to base styles or component classes. The easiest way to do this is to use Purgecss's whitelisting feature to disable Purgecss for non-utility classes:

```css
/* purgecss start ignore */
@tailwind base;
@tailwind components;
/* purgecss end ignore */

@tailwind utilities;
```

This will ensure you don't accidentally purge important base styles when working with frameworks like Next.js, Nuxt, vue-cli, create-react-app, and others that hide their base HTML template somewhere in your `node_modules` directory.

<br/>

### Comparison before and after "purgecss" in Chrome DevTools Audits

#### Before

![before](https://i.imgur.com/klIowJE.png)

#### After

![after](https://i.imgur.com/6yT4uf1.png)
