import React from 'react';
import { Layout } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import AppMenu from '../AppMenu';

interface ISiderProps {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sider: React.FC<ISiderProps> = ({ collapsed, setCollapsed }) => {
  return (
    <Layout.Sider
      className="overflow-hidden fixed left-0 top-[48px] bottom-0"
      trigger={null}
      collapsible
      collapsed={collapsed}
      collapsedWidth={48}
    >
      <AppMenu />
      <div
        className={classNames(
          'absolute bottom-0 left-0 w-full h-10 flex items-center',
          collapsed ? 'justify-center' : 'justify-start pl-4'
        )}
      >
        {React.createElement(
          collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
          {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          }
        )}
      </div>
    </Layout.Sider>
  );
};

export default Sider;
