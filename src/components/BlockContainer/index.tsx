import React from 'react';
import { theme as AntdTheme, Card } from 'antd';
import { useThemeStore } from '@/store';
import classnames from 'classnames';

interface IBlockContainer {
  title?: string;
  extra?: React.ReactNode;
  isBordered?: boolean;
  bodyStyles?: React.CSSProperties;
  children: React.ReactNode;
}

const BlockContainer: React.FC<IBlockContainer> = ({
  title,
  extra,
  isBordered = false,
  bodyStyles = { padding: '1rem', borderRadius: 0 },
  children,
}) => {
  const { theme } = useThemeStore();

  return (
    <Card
      title={title}
      extra={extra}
      bordered={isBordered}
      className={classnames(
        '!shadow-cur rounded-cur',
        theme.algorithm === AntdTheme.defaultAlgorithm || !theme.algorithm
          ? 'bg-[#FFFFFF]'
          : 'bg-[#26324D]'
      )}
      styles={{ body: bodyStyles }}
    >
      {children}
    </Card>
  );
};

export default BlockContainer;
