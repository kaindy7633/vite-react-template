import React from 'react';
import { Card } from 'antd';

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
  return (
    <Card
      title={title}
      extra={extra}
      bordered={isBordered}
      className="!shadow-cur rounded-cur"
      styles={{ body: bodyStyles }}
    >
      {children}
    </Card>
  );
};

export default BlockContainer;
