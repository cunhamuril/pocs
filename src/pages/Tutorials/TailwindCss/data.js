/* eslint-disable no-useless-escape */
export const content = `\*Recommended to use the VSCode extension: Tailwind CSS IntelliSense

This tutorial was made based on this another tutorial: [Setting Up Tailwind CSS In A React Project](https://www.smashingmagazine.com/2020/02/tailwindcss-react-project)

#### 1. Getting started

**1.1. Install devDependencies:**

~~~bash
npm install --save-dev tailwindcss postcss-cli autoprefixer
~~~

OR

~~~bash
yarn add -D tailwindcss postcss-cli autoprefixer
~~~

**1.2. Initialize Tailwind CSS by creating the default configurations.**

~~~bash
npx tailwind init tailwind.js --full
~~~

This command creates a ~tailwind.js~ in project’s base directory; the file contains the configuration, such as our colors, themes, media queries, and so on. It’s a useful file that helps with predefined sets of properties which will aid the need to re-brand certain conventions or properties if the need arises.

<br/>

#### 2. Configure [PostCSS](https://github.com/postcss/postcss)

**2.1. Create a PostCSS configuration file in base directory with this name:** ~postcss.config.js~

**2.2. Add the following lines of code to ~postcss.config.js~:**

~~~js
const tailwindcss = require("tailwindcss");
module.exports = {
  plugins: [tailwindcss("./tailwind.js"), require("autoprefixer")],
};
~~~

<br/>

#### 3. Inject Tailwind's components, utilities and base styles on app

**3.1. Create the following file:** ~src/themes/tailwind.config.css~

**3.2. Import the base styles and configuration on file ~src/themes/tailwind.config.css~:**

~~~css
@tailwind base;

@tailwind components;

@tailwind utilities;
~~~

<br/>

#### 4. Configure the app to build CSS

- **Edit the script part on ~package.json~ file:**

~~~json
"tailwind:css": "postcss src/theme/tailwind.config.css -o src/theme/tailwind.css",
"start": "npm run tailwind:css && react-scripts start",
"build": "npm run tailwind:css && react-scripts build",
~~~

<br/>

#### 5. Import CSS

Import the CSS file appropriately to ensure that it’s properly watched and built when we run ~npm start~ or ~yarn start~.

- **Import the ~src/theme/tailwind.css~ file on ~src/index.js~:**

~~~js
import "./theme/tailwind.css";
~~~

<br/>

#### 6. Add the ~src/theme/tailwind.css~ file to ~.gitignore~ file:

~~~
/src/theme/tailwind.css
~~~`;
