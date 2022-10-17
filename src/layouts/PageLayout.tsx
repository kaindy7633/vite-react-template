/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const PageLayout: React.FC = () => {
  return (
    <Layout>
      <Header className=" text-white">Header</Header>
      <Content>
        <Outlet />
      </Content>
      <Footer>我是页脚</Footer>
    </Layout>
  );
};

export default PageLayout;
