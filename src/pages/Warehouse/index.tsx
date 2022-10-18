import React from 'react';
import { useNavigate } from 'react-router';
import { Button } from 'antd';

const Warehouse: React.FC = () => {
  const navigation = useNavigate();

  return (
    <>
      <p>Ware House 仓储管理</p>
      <p>
        <Button type="default" onClick={() => navigation('/')}>
          返回首页
        </Button>
      </p>
    </>
  );
};

export default Warehouse;
