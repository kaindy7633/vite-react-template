import React from 'react';
import { Layout, Space } from 'antd';
import Logo from '@/assets/logo.png';
import { APP_TITLE } from '@/constants';

const Header: React.FC = () => {
  return (
    <Layout.Header className="text-white h-12 w-full px-5 flex items-center justify-between fixed left-0 top-0 right-0 z-50">
      <Space className="h-full">
        <img src={Logo} alt={APP_TITLE} className="w-8 h-8" />
        <span className="text-[16px]">{APP_TITLE}</span>
      </Space>
      <Space className="h-full">
        <div>搜索框</div>
        <div>模式切换</div>
        <div>信息提示</div>
        <div>账号</div>
      </Space>
    </Layout.Header>
  );
};

export default Header;
