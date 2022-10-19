import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Result } from 'antd';

const ServerError: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Result
      status="500"
      title="500"
      subTitle="抱歉, 服务端发生异常, 请返回!"
      extra={
        <Button type="primary" onClick={() => navigate('/')}>
          返回
        </Button>
      }
    />
  );
};

export default ServerError;
