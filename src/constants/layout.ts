/**
 *  布局配置,一共有三种布局：水平布局,垂直布局,空白布局
 *  水平布局：即菜单栏与主体内容呈现左右两边布局样式
 *  垂直布局：即顶部栏与主体内容呈现上下布局样式
 *  空白布局：即没有任何布局样式
 */

type TLayoutConfigProps = {
  mode: 'horizontal' | 'vertical' | 'blank';
  // 菜单主题
  menuTheme: 'dark' | 'light';
  // 左侧菜单默认状态，目前设置为完整模式,即全部展开
  menuCollapsed: boolean;
  // 其他配置...
};

export const layoutConfig: TLayoutConfigProps = {
  mode: 'horizontal',
  menuTheme: 'dark',
  menuCollapsed: false,
};
