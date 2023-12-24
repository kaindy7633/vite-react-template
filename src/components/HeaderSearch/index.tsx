import React, { useState } from 'react';
import { theme as AntdTheme, Empty, Input, Modal } from 'antd';
import { useThemeStore } from '@/store';
import classnames from 'classnames';
import IconFont from '@/components/IconFont';

const HeaderSearch: React.FC = () => {
  const { theme } = useThemeStore();

  const [searchModalOpen, setSearchModalOpen] = useState<boolean>(false);

  return (
    <>
      <span
        className="h-full cursor-pointer flex justify-center items-center"
        onClick={() => setSearchModalOpen(true)}
        title="站内搜索"
      >
        <IconFont
          type="icon-search"
          className={classnames(
            'text-lg',
            theme.algorithm === AntdTheme.defaultAlgorithm || !theme.algorithm
              ? ''
              : 'text-white'
          )}
        />
      </span>

      <Modal
        title="站内搜索"
        open={searchModalOpen}
        destroyOnClose
        footer={null}
        maskClosable={false}
        onCancel={() => setSearchModalOpen(false)}
      >
        <Input
          size="large"
          prefix={<IconFont type="icon-search" />}
          placeholder="请输入业务关键字..."
          className="!pl-2"
        />
        <Empty
          description="暂无搜索数据"
          imageStyle={{ height: 60 }}
          className="mt-5"
        />
      </Modal>
    </>
  );
};

export default HeaderSearch;
