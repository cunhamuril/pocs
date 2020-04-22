import React from "react";
import { Row, Col } from "antd";

import ContentWrapper from "../../components/ContentWrapper";

import DynamicForm from "./DynamicForm";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";

const Forms = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <ContentWrapper pageTitle="Form">
      <h1 className="text-center text-lg mb-4">Responsive Forms</h1>
      <Row>
        <Col xs={24} lg={12} className="bg-green-300 p-2">
          <DynamicForm onFinish={onFinish} />
        </Col>

        <Col xs={24} lg={12} className="bg-orange-300 p-2">
          <LoginForm onFinish={onFinish} onFinishFailed={onFinishFailed} />
        </Col>
      </Row>

      <Row>
        <Col xs={24} className="bg-blue-300 p-3">
          <RegistrationForm onFinish={onFinish} />
        </Col>
      </Row>
    </ContentWrapper>
  );
};

export default Forms;
