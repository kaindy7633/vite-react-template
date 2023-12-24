import React from 'react';
import { Button, Layout, Space } from 'antd';
import { appTitle } from '@/constants/app';
import { layoutConfig } from '@/constants/layout';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import AppMenu from '../AppMenu';

interface ISiderProps {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

/**
 *  继承Antd的Button组件，自定义鼠标悬停时的图标字体颜色
 */
const SideCollapseButton = styled(Button)`
  &:hover {
    color: white !important;
  }
`;

const Sider: React.FC<ISiderProps> = ({ collapsed, setCollapsed }) => {
  return (
    <Layout.Sider
      className="overflow-hidden fixed left-0 top-0 bottom-0 h-full bg-transparent"
      trigger={null}
      collapsible
      collapsed={collapsed}
      collapsedWidth={48}
      theme={layoutConfig.menuTheme}
    >
      {layoutConfig.mode === 'horizontal' ? (
        <div className="w-full h-[48px] flex justify-center items-center">
          <Space>
            <img src="/Logo.svg" alt={appTitle} className="w-6 h-6" />
            {!collapsed ? <span className="text-white">{appTitle}</span> : null}
          </Space>
        </div>
      ) : null}
      <AppMenu />
      <SideCollapseButton
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        className="absolute left-1/2 bottom-0 transform -translate-x-1/2 text-white"
      />
    </Layout.Sider>
  );
};

export default Sider;
