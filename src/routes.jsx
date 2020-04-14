import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import AntDesign from "./pages/Tutorials/AntDesign";
import TailwindCss from "./pages/Tutorials/TailwindCss";
import PurgeCss from "./pages/Tutorials/PurgeCss";

export default () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/ant-design" exact component={AntDesign} />
    <Route path="/tailwind-css" exact component={TailwindCss} />
    <Route path="/purge-css" exact component={PurgeCss} />
  </Switch>
);
