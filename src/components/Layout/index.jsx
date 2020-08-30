import React from "react";
import { Layout, Avatar, Menu, Popover } from "antd";
import Title from "antd/lib/typography/Title";
import { NavLink } from "react-router-dom";
import {
  MailOutlined,
  RocketOutlined,
  AppstoreOutlined,
  FormOutlined,
  FileImageOutlined,
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
          PoC
        </Title>
        <Popover
          title="Mock User"
          placement="bottomLeft"
          content={
            <>
              <p>Content</p>
            </>
          }
        >
          <label className="text-white mr-2">Murilaum</label>
          <Avatar
            size="large"
            src="https://api.adorable.io/avatars/285/cunha.png"
          />
        </Popover>
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
              <NavLink to="/">
                <span className="flex items-center">
                  <AppstoreOutlined />
                  <span>Dashboard</span>
                </span>
              </NavLink>
            </Menu.Item>
            <Menu.Item key="image-crop">
              <NavLink to="/image-crop">
                <span className="flex items-center">
                  <FileImageOutlined />
                  <span>Image crop</span>
                </span>
              </NavLink>
            </Menu.Item>
            <Menu.Item key="easy-crop">
              <NavLink to="/easy-crop">
                <span className="flex items-center">
                  <FileImageOutlined />
                  <span>Easy crop</span>
                </span>
              </NavLink>
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
                  <NavLink to={tutorial.path}>{tutorial.title}</NavLink>
                </Menu.Item>
              ))}
            </Menu.SubMenu>

            <Menu.Item key="form">
              <NavLink to="/forms">
                <span className="flex items-center">
                  <FormOutlined />
                  <span>Forms</span>
                </span>
              </NavLink>
            </Menu.Item>

            <Menu.Item key="formik-yup">
              <NavLink to="/formik-yup">
                <span className="flex items-center">
                  <FormOutlined />
                  <span>Formik Yup</span>
                </span>
              </NavLink>
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
