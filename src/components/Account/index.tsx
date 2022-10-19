import React from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const Account: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-row flex-nowrap justify-center items-center gap-1">
      <Avatar icon={<UserOutlined />} size="small" />
      <span>管理员登录</span>
    </div>
  );
};

export default Account;
