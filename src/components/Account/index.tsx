import React from 'react';
import { Avatar, Dropdown, MenuProps, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        帮助
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        个人中心
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        退出登录
      </a>
    ),
  },
];

const Account: React.FC = () => {
  return (
    <Dropdown menu={{ items }} placement="bottomRight" arrow>
      <div className="w-full h-full flex flex-row flex-nowrap justify-center items-center gap-1">
        <Avatar icon={<UserOutlined />} size="small" />
        <Typography>管理员登录</Typography>
      </div>
    </Dropdown>
  );
};

export default Account;
