import React from 'react';
import { Card } from 'antd';

interface IBlockContainer {
  title?: string;
  extra?: React.ReactNode;
  isBordered?: boolean;
  children: React.ReactNode;
}

const BlockContainer: React.FC<IBlockContainer> = ({
  title,
  extra,
  isBordered = false,
  children,
}) => {
  return (
    <Card
      title={title}
      extra={extra}
      bordered={isBordered}
      className="rounded shadow-cur"
    >
      {children}
    </Card>
  );
};

export default BlockContainer;
