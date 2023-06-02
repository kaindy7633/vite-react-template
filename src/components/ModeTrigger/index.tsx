import React from 'react';
import { Switch, theme } from 'antd';
import { useThemeStore } from '@/store';
import IconFont from '@/components/IconFont';

const ModeTrigger: React.FC = () => {
  const { setTheme } = useThemeStore();

  /**
   * @TODO 切换显示模式
   */
  const handleTriggerMode = (
    checked: boolean,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    checked
      ? setTheme({ algorithm: theme.defaultAlgorithm })
      : setTheme({ algorithm: theme.darkAlgorithm });
  };

  return (
    <Switch
      checkedChildren={<IconFont type="icon-default" />}
      unCheckedChildren={<IconFont type="icon-dark" />}
      defaultChecked
      onChange={handleTriggerMode}
    />
  );
};

export default ModeTrigger;
