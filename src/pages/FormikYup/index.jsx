import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import "./styles.css";

import schema from "./schema";

const FormikYup = () => {
  const initialValues = {
    user: "",
    password: "",
  };

  function handleSubmit(values) {
    alert(JSON.stringify(values));
  }

  return (
    <>
      <h1 className="text-center text-lg mb-4">Welcome</h1>

      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={schema}
      >
        <Form className="form">
          <div className="input-group">
            <Field type="text" name="user" placeholder="user" />
            <ErrorMessage component="span" name="user" />
          </div>

          <div className="input-group">
            <Field type="password" name="password" placeholder="password" />
            <ErrorMessage component="span" name="password" />
          </div>

          <button type="submit">Login</button>
        </Form>
      </Formik>
    </>
  );
};

export default FormikYup;
