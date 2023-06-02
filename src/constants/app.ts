// APP 项目相关的常量配置
import { theme } from 'antd';
import { MappingAlgorithm } from 'antd/es/config-provider/context';

// 项目名称
export const appTitle = 'React项目模板';

// 项目主题风格
export const appThemeColor = '#1677ff';

// 项目主题模式 (常规/暗黑)
export const appThemeMode: MappingAlgorithm | MappingAlgorithm[] | undefined =
  theme.defaultAlgorithm;

// iconfont 应用图标
export const appIconFontScript =
  '//at.alicdn.com/t/c/font_3701640_pcinl3ll0vr.js';
