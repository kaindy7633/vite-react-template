/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import { layoutConfig } from '@/constants/layout';
import classNames from 'classnames';
import Header from '@/components/Header';
import Sider from '@/components/Sider';

const { Content } = Layout;

const PageLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(layoutConfig?.menuCollapsed);

  return (
    <>
      {layoutConfig.mode === 'horizontal' ? (
        <Layout className="w-full h-full relative flex flex-row flex-nowrap">
          <Sider collapsed={collapsed} setCollapsed={setCollapsed} />
          <Layout className="flex-1 h-full relative">
            <Header />
            <Layout className="flex-1 relative">
              <Content className={classNames('p-4 overflow-auto bg-[#F8FAFC]')}>
                <Outlet />
              </Content>
            </Layout>
          </Layout>
        </Layout>
      ) : layoutConfig.mode === 'vertical' ? (
        <Layout className="w-full h-full relative flex flex-col">
          <Header />
          <Layout className="flex-1 relative mt-12">
            <Sider collapsed={collapsed} setCollapsed={setCollapsed} />
            <Content className={classNames('p-4 overflow-auto')}>
              <Outlet />
            </Content>
          </Layout>
        </Layout>
      ) : (
        <></>
      )}
    </>
  );
};

export default PageLayout;
