import React from 'react';
import { Layout } from 'antd';
import { appTitle } from '@/constants';
import { layoutConfig } from '@/constants/layout';
import classnames from 'classnames';
import Account from '@/components/Account';
import HeaderSearch from '../HeaderSearch';
import ModeTrigger from '../ModeTrigger';
import NoticeMessage from '../NoticeMessage/index';

// layoutConfig.mode === 'horizontal'

const Header: React.FC = () => {
  return (
    <Layout.Header
      className={classnames(
        layoutConfig.mode === 'vertical'
          ? 'text-white h-12 w-full pl-3 pr-4 flex items-center justify-between fixed left-0 top-0 right-0 z-50 shadow-md'
          : 'w-full  h-[48px] bg-white flex items-center justify-end px-4'
      )}
    >
      {layoutConfig.mode === 'vertical' ? (
        <div className="h-full flex flex-row flex-nowrap items-center gap-3">
          <img src="/Logo.svg" alt={appTitle} className="w-6 h-6" />
          <span className="text-[16px]">{appTitle}</span>
        </div>
      ) : null}

      <div className="h-full flex flex-row flex-nowrap items-center gap-5">
        <HeaderSearch />
        <span className="h-full cursor-pointer flex justify-center items-center">
          <NoticeMessage />
        </span>
        <span className="h-full cursor-pointer flex justify-center items-center">
          <Account />
        </span>
        <span className="h-full cursor-pointer flex justify-center items-center">
          <ModeTrigger />
        </span>
      </div>
    </Layout.Header>
  );
};

export default Header;
