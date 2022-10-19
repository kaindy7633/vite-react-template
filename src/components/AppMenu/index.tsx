import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, type MenuProps } from 'antd';
import IconFont from '@/components/IconFont';

const AppMenu: React.FC<MenuProps> = () => {
  const navigate = useNavigate();

  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={['home']}
      items={[
        {
          key: 'home',
          icon: <IconFont type="icon-home" size={18} />,
          label: '首页',
          onClick: () => navigate('/'),
        },
        {
          key: 'purchase',
          icon: <IconFont type="icon-purchase" size={21} />,
          label: '采购管理',
          children: [
            {
              key: 'purchase-one',
              label: '采购管理-选项一',
              onClick: () => navigate('/purchase/one'),
            },
            {
              key: 'purchase-two',
              label: '采购管理-选项二',
              onClick: () => navigate('/purchase/two'),
            },
          ],
        },
        {
          key: 'warehouse',
          icon: <IconFont type="icon-warehouse" size={19} />,
          label: '仓库管理',
          children: [
            {
              key: 'standard-product',
              label: '标准品管理',
              onClick: () => navigate('/warehouse/standard-product'),
            },
            {
              key: 'reagent-consumables',
              label: '试剂耗材管理',
              onClick: () => navigate('/warehouse/reagent-consumables'),
            },
          ],
        },
        {
          key: 'usercenter',
          icon: <IconFont type="icon-usercenter" size={20} />,
          label: '用户中心',
          onClick: () => navigate('/usercenter'),
        },
      ]}
    />
  );
};

export default AppMenu;
