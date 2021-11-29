import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Forms from "./pages/Forms";
import ImageCrop from "./pages/ImageCrop";
import EasyCrop from "./pages/EasyCrop";
import FormikYup from "./pages/FormikYup";
import Map from "./pages/Map";
import DataTable from "./pages/DataTable";

import AntDesign from "./pages/Tutorials/AntDesign";
import TailwindCss from "./pages/Tutorials/TailwindCss";
import PurgeCss from "./pages/Tutorials/PurgeCss";

export default () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/image-crop" exact component={ImageCrop} />
    <Route path="/easy-crop" exact component={EasyCrop} />
    <Route path="/formik-yup" exact component={FormikYup} />
    <Route path="/map" exact component={Map} />
    <Route path="/datatable" exact component={DataTable} />

    <Route path="/tutorial/ant-design" exact component={AntDesign} />
    <Route path="/tutorial/tailwind-css" exact component={TailwindCss} />
    <Route path="/tutorial/purge-css" exact component={PurgeCss} />

    <Route path="/forms" exact component={Forms} />
  </Switch>
);
