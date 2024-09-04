/**
 *
 * TODO：请注意，该组件即将被废弃，请勿使用. 2024-09-04
 * TODO: 新的主题切换组件是, ThemeTrigger
 *
 *
 */
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
