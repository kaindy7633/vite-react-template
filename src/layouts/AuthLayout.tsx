import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout: React.FC = () => {
  return (
    <div>
      <p>这里可以呈现登录页、找回密码或其他不需要 PageLayout 控制的页面</p>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
