import React from "react";

import { Layout, Avatar, Menu, Breadcrumb } from "antd";
import Title from "antd/lib/typography/Title";
import { MailOutlined } from "@ant-design/icons";

import "./theme/global.css";

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <div className="App">
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
              <Menu.Item key="dashboard">Dashboard</Menu.Item>

              <Menu.SubMenu
                title={
                  <span>
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
            <Content className="px-8">
              <Breadcrumb className="py-4">
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
              </Breadcrumb>

              <div className="bg-white p-6" style={{ minHeight: 580 }}>
                Content
              </div>
            </Content>

            {/* FOOTER */}
            <Footer className="text-center">
              Ant Design Layout Example Created by Murilo Cunha
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
