// 主题切换
import React from 'react';
import { theme as AntdTheme } from 'antd';
import theme_dark_icon from '@/assets/theme_dark.png';
import theme_light_icon from '@/assets/theme_light.png';
import { useThemeStore } from '@/store';

type TThemeTriggerProps = {};

const ThemeTrigger: React.FC<TThemeTriggerProps> = () => {
  const { theme, setTheme } = useThemeStore();

  return (
    <div
      className="w-full h-full flex flex-row flex-nowrap justify-center items-center"
      onClick={() => {
        theme.algorithm === AntdTheme.defaultAlgorithm || !theme.algorithm
          ? setTheme({ algorithm: AntdTheme.darkAlgorithm })
          : setTheme({ algorithm: AntdTheme.defaultAlgorithm });
      }}
    >
      {theme.algorithm === AntdTheme.defaultAlgorithm || !theme.algorithm ? (
        <img src={theme_light_icon} alt="" className="w-[1.5rem] h-[1.5rem]" />
      ) : (
        <img src={theme_dark_icon} alt="" className="w-[1.5rem] h-[1.5rem]" />
      )}
    </div>
  );
};

export default ThemeTrigger;
