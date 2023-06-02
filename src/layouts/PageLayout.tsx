/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import classNames from 'classnames';
import Header from '@/components/Header';
import Sider from '@/components/Sider';

const { Content } = Layout;

const PageLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <Layout className="w-full h-full relative flex flex-col">
      <Header />
      <Layout className="flex-1 relative mt-[48px]">
        <Sider collapsed={collapsed} setCollapsed={setCollapsed} />
        <Content className={classNames('p-4 overflow-auto')}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default PageLayout;
