import React from 'react';
import { Avatar, Dropdown, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const menu = (
  <Menu
    items={[
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
    ]}
  />
);

const Account: React.FC = () => {
  return (
    <Dropdown overlay={menu} placement="bottomRight" arrow>
      <div className="w-full h-full flex flex-row flex-nowrap justify-center items-center gap-1">
        <Avatar icon={<UserOutlined />} size="small" />
        <span>管理员登录</span>
      </div>
    </Dropdown>
  );
};

export default Account;
