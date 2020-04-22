import React from "react";
import { Layout, Avatar, Menu } from "antd";
import Title from "antd/lib/typography/Title";
import { Link } from "react-router-dom";
import {
  MailOutlined,
  RocketOutlined,
  AppstoreOutlined,
  FormOutlined,
} from "@ant-design/icons";

import tutorials from "../../mock/tutorials.json";

import "../../theme/global.css";

const { Header, Footer, Sider, Content } = Layout;

export default ({ children }) => {
  return (
    <Layout>
      {/* HEADER */}
      <Header className="flex items-center justify-between">
        <Title level={3} style={{ color: "#FFF", margin: 0 }}>
          Ant Design
        </Title>
        <Avatar
          size="large"
          src="https://api.adorable.io/avatars/285/cunha.png"
        />
      </Header>

      <Layout className="min-h-screen">
        {/* SIDE MENU */}
        <Sider>
          <Menu
            defaultOpenKeys={["dashboard"]}
            defaultSelectedKeys={["dashboard"]}
            mode="inline"
            theme="dark"
          >
            <Menu.Item key="dashboard">
              <Link to="/">
                <span className="flex items-center">
                  <AppstoreOutlined />
                  <span>Dashboard</span>
                </span>
              </Link>
            </Menu.Item>

            <Menu.SubMenu
              title={
                <span className="flex items-center">
                  <RocketOutlined />
                  <span>Tutorials</span>
                </span>
              }
            >
              {tutorials.map((tutorial) => (
                <Menu.Item key={tutorial.id}>
                  <Link to={tutorial.path}>{tutorial.title}</Link>
                </Menu.Item>
              ))}
            </Menu.SubMenu>

            <Menu.Item key="form">
              <Link to="/forms">
                <span className="flex items-center">
                  <FormOutlined />
                  <span>Forms</span>
                </span>
              </Link>
            </Menu.Item>

            <Menu.SubMenu
              title={
                <span className="flex items-center">
                  <MailOutlined />
                  <span>About</span>
                </span>
              }
            >
              <Menu.ItemGroup title="About US">
                <Menu.Item>Location 1</Menu.Item>
              </Menu.ItemGroup>
            </Menu.SubMenu>
          </Menu>
        </Sider>

        {/* MAIN */}
        <Layout>
          {/* CONTENT */}
          <Content className="px-8">{children}</Content>

          {/* FOOTER */}
          <Footer className="text-center">
            Ant Design Layout Example Created by Murilo Cunha
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};
