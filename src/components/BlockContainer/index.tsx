import React from 'react';
import { Card } from 'antd';

interface IBlockContainer {
  children: React.ReactNode;
}

const BlockContainer: React.FC<IBlockContainer> = ({ children }) => {
  return <Card className=" shadow-md rounded-md">{children}</Card>;
};

export default BlockContainer;
