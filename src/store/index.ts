/**
 * @description 模版采用了Zustand作为状态管理工具，该工具具有体积小、无需模版代码，无需 Provider 等特点
 * 更少的样板代码
 * Zustand 只在 state 的值改变时渲染组件, 通常可以处理状态的改变而无需渲染代码
 * 状态管理通过简单定义的操作进行集中和更新, 在这方面和 Redux 类似, 但是又和 Redux 不太类似, Redux 开发必须创建 reducer、action、dispatch来处理状态, Zustand 让它变得更加容易
 * 使用 hooks 来管理 states, Hooks 在 react 中很流行, 因此是一个很受欢迎的状态管理库
 * Zustand 使用简单使用和简单实现的代码
 * 通过消除使用 Context Provides 从而使代码更短、更易读
 * 参考文章：https://juejin.cn/post/7134633741774749710
 */
import { theme as AntdTheme, ThemeConfig } from 'antd';
import { appThemeColor } from '@/constants';
import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';

type TokenConfig = {
  accessToken: string;
  refreshToken: string;
};

export const useTokenStore = create<{
  token: TokenConfig;
  setToken: (_token: TokenConfig) => void;
}>()(
  devtools(
    persist(
      (set, get) => ({
        token: {
          accessToken: '',
          refreshToken: '',
        },
        setToken: (_token) =>
          set((state) => ({ token: { ...state.token, ..._token } })),
      }),
      {
        name: 'token-storage', // unique name
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  )
);

/**
 * @TODO 定义切换主题变量, 5.x 版本升级后，这里数据结构发生修改
 */
export const useThemeStore = create<{
  theme: ThemeConfig & Record<string, any>;
  setTheme: (_theme: ThemeConfig) => void;
}>()(
  devtools(
    persist(
      (set, get) => ({
        theme: {
          token: { colorPrimary: appThemeColor },
          algorithm: AntdTheme.defaultAlgorithm,
        },
        setTheme: (_theme) =>
          set((state) => ({ theme: { ...state.theme, ..._theme } })),
      }),
      {
        name: 'food-storage', // unique name
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  )
);
