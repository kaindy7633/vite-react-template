import React from 'react';
import {
  theme as AntdTheme,
  Avatar,
  Dropdown,
  MenuProps,
  Typography,
} from 'antd';
import { useThemeStore } from '@/store';
import { UserOutlined } from '@ant-design/icons';
import RemixIcon from '@/components/RemixIcon';

const Account: React.FC = () => {
  const { theme } = useThemeStore();

  const items: MenuProps['items'] = [
    {
      key: '1',
      icon: (
        <RemixIcon
          icon="ri-questionnaire-line"
          color={
            theme.algorithm === AntdTheme.defaultAlgorithm || !theme.algorithm
              ? undefined
              : '#FFFFFF'
          }
        />
      ),
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
      icon: (
        <RemixIcon
          icon="ri-id-card-line"
          color={
            theme.algorithm === AntdTheme.defaultAlgorithm || !theme.algorithm
              ? undefined
              : '#FFFFFF'
          }
        />
      ),
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
      icon: (
        <RemixIcon
          icon="ri-logout-circle-line"
          color={
            theme.algorithm === AntdTheme.defaultAlgorithm || !theme.algorithm
              ? undefined
              : '#FFFFFF'
          }
        />
      ),
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

  return (
    <Dropdown menu={{ items }} placement="bottomRight" arrow>
      <div className="w-full h-full flex flex-row flex-nowrap justify-center items-center gap-1">
        <Avatar icon={<UserOutlined />} size="small" />
        <Typography className="inline-block leading-[48px] w-[4rem] h-full truncate">
          Admin
        </Typography>
      </div>
    </Dropdown>
  );
};

export default Account;
