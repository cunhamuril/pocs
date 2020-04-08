import React from "react";

import { Layout, Avatar, Menu, Breadcrumb } from "antd";
import Title from "antd/lib/typography/Title";
import { MailOutlined } from "@ant-design/icons";

import "./App.css";

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu, ItemGroup } = Menu;

function App() {
  return (
    <div className="App">
      <Layout>
        {/* HEADER */}
        <Header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Title level={3} style={{ color: "#FFF", margin: 0 }}>
            Ant Design
          </Title>
          <Avatar
            size="large"
            src="https://api.adorable.io/avatars/285/cunha.png"
          />
        </Header>

        <Layout style={{ minHeight: "93vh" }}>
          {/* SIDE MENU */}
          <Sider>
            <Menu
              defaultOpenKeys={["dashboard"]}
              defaultSelectedKeys={["dashboard"]}
              mode="inline"
              theme="dark"
            >
              <Menu.Item key="dashboard">Dashboard</Menu.Item>

              <SubMenu
                title={
                  <span>
                    <MailOutlined />
                    <span>About</span>
                  </span>
                }
              >
                <ItemGroup title="About US">
                  <Menu.Item>Location 1</Menu.Item>
                </ItemGroup>
              </SubMenu>
            </Menu>
          </Sider>

          {/* MAIN */}
          <Layout>
            {/* CONTENT */}
            <Content style={{ padding: "0 50px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
              </Breadcrumb>

              <div style={{ background: "#FFF", padding: 24, minHeight: 580 }}>
                Content
              </div>
            </Content>

            {/* FOOTER */}
            <Footer style={{ textAlign: "center" }}>
              Ant Design Layout Example Created by Murilo Cunha
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
