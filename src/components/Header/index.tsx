import React from 'react';
import { Layout } from 'antd';
import Logo from '@/assets/logo.png';
import { APP_TITLE } from '@/constants';
import IconFont from '@/components/IconFont';

const Header: React.FC = () => {
  return (
    <Layout.Header className="text-white h-12 w-full pl-2 pr-4 flex items-center justify-between fixed left-0 top-0 right-0 z-50 shadow-md">
      <div className="h-full flex flex-row flex-nowrap items-center gap-2">
        <img src={Logo} alt={APP_TITLE} className="w-6 h-6" />
        <span className="text-[16px]">{APP_TITLE}</span>
      </div>
      <div className="h-full flex flex-row flex-nowrap items-center gap-4">
        <span className="h-full cursor-pointer flex justify-center items-center">
          <IconFont type="icon-search" size={18} />
        </span>
        <span className="h-full cursor-pointer flex justify-center items-center">
          <IconFont type="icon-notice-message" size={19} />
        </span>
        <span>账号</span>
        <span>模式切换</span>
      </div>
    </Layout.Header>
  );
};

export default Header;
