import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Result } from 'antd';

const AuthFaild: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Result
      status="403"
      title="403"
      subTitle="抱歉, 您没有权限访问此页面!"
      extra={
        <Button type="primary" onClick={() => navigate('/')}>
          返回
        </Button>
      }
    />
  );
};

export default AuthFaild;
