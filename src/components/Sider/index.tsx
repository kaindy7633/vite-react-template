import React from 'react';
import { Button, Layout } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import AppMenu from '../AppMenu';

interface ISiderProps {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sider: React.FC<ISiderProps> = ({ collapsed, setCollapsed }) => {
  return (
    <Layout.Sider
      className="overflow-hidden fixed left-0 top-0 bottom-0 h-full"
      trigger={null}
      collapsible
      collapsed={collapsed}
      collapsedWidth={48}
      theme="light"
    >
      <AppMenu />
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        className="absolute left-1/2 bottom-0 transform -translate-x-1/2"
      />
    </Layout.Sider>
  );
};

export default Sider;
