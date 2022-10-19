import React from 'react';
import { Card } from 'antd';

interface IBlockContainer {
  title?: string;
  extra?: React.ReactNode;
  children: React.ReactNode;
}

const BlockContainer: React.FC<IBlockContainer> = ({
  title,
  extra,
  children,
}) => {
  return (
    <Card title={title} extra={extra} className="shadow rounded-md">
      {children}
    </Card>
  );
};

export default BlockContainer;
