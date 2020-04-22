import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Forms from "./pages/Forms";

import AntDesign from "./pages/Tutorials/AntDesign";
import TailwindCss from "./pages/Tutorials/TailwindCss";
import PurgeCss from "./pages/Tutorials/PurgeCss";

export default () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />

    <Route path="/tutorial/ant-design" exact component={AntDesign} />
    <Route path="/tutorial/tailwind-css" exact component={TailwindCss} />
    <Route path="/tutorial/purge-css" exact component={PurgeCss} />

    <Route path="/forms" exact component={Forms} />
  </Switch>
);
