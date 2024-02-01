import styled from "@emotion/styled"
import {Link, Outlet} from "react-router-dom"
import {Layout, Menu} from "antd"
import React from "react";

const {Header, Content, Footer} = Layout


export const LayoutPage = () => {
  return (
    <Layout style={{height: "100%"}}>
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Link to="/bluetooth">Bluetooth</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/wifi">Wifi</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/ethernet">Ethernet</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{
        padding: '0 48px',
        margin: "20px",
        height: "100%"
      }}>
        <OutletWrapper
          style={{
            background: "white",
            padding: 24,
            borderRadius: "10px",
          }}
        >
          <Outlet/>
        </OutletWrapper>
      </Content>
    </Layout>
  );
};

const OutletWrapper = styled.div`
    height: 100%;
`