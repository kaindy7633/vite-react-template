/* eslint-disable @typescript-eslint/no-unused-vars */

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
import { Locale } from 'antd/es/locale';
import zhCN from 'antd/lib/locale/zh_CN';
import { appThemeColor } from '@/constants';
import { create } from 'zustand';
import {
  combine, // TODO 该API未使用，后续添加
  createJSONStorage,
  devtools,
  persist,
} from 'zustand/middleware';

type TTokenStoreProps = {
  token: string;
  refreshToken?: string;
  setToken: (_token: string) => void;
  setRefreshToken: (_refreshToken: string) => void;
};

/**
 * 定义 token 变量
 */
export const useTokenStore = create<TTokenStoreProps>()(
  devtools(
    persist(
      (set, _get) => ({
        token: '',
        refreshToken: '',
        setToken: (_token) => set({ token: _token }),
        setRefreshToken: (_refreshToken) =>
          set({ refreshToken: _refreshToken }),
      }),
      {
        name: 'token-storage',
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  )
);

type TLocaleStoreProps = {
  locale: Locale;
  setLocale: (_locale: Locale) => void;
};

/**
 * 定义语言设定
 */
export const useLocaleStore = create<TLocaleStoreProps>()(
  devtools(
    persist(
      (set, _get) => ({
        locale: zhCN,
        setLocale: (_locale) => set((_state) => ({ locale: _locale })),
      }),
      {
        name: 'locale-storage',
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  )
);

type TThemeStoreProps = {
  theme: ThemeConfig;
  setTheme: (_theme: ThemeConfig) => void;
};

/**
 *  定义切换主题变量
 *  默认主题主调色为 `appThemeColor`, 即 `#1890ff`
 *  默认主题算法为 `AntdTheme.defaultAlgorithm`，可选算法有：
 *    - `AntdTheme.defaultAlgorithm` 默认算法
 *    - `AntdTheme.compactAlgorithm` 紧凑算法
 *    - `AntdTheme.darkAlgorithm` 暗黑算法
 *  algorithm 可以是一个算法，也可以是一个算法数组, 比如：
 *    - `AntdTheme.defaultAlgorithm`
 *    - `[AntdTheme.defaultAlgorithm, AntdTheme.compactAlgorithm]`
 *  token 可以是一个对象，也可以是一个对象数组, 比如：
 *    - `{ colorPrimary: appThemeColor }`
 *    - `[{ colorPrimary: appThemeColor }, { colorPrimary: appThemeColor }]`
 */
export const useThemeStore = create<TThemeStoreProps>()(
  devtools(
    persist(
      (set, _get) => ({
        theme: {
          token: { colorPrimary: appThemeColor },
          algorithm: AntdTheme.defaultAlgorithm,
        },
        setTheme: (_theme: ThemeConfig) =>
          set((state) => ({ theme: { ...state.theme, ..._theme } })),
      }),
      {
        name: 'theme-storage',
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  )
);

type TUserStoreProps = {
  userInfo: Record<string, any>;
  setUserInfo: (_userInfo: Record<string, any>) => void;
};

/**
 * 定义用户信息
 */
export const useUserStore = create<TUserStoreProps>()(
  devtools(
    persist(
      (set, _get) => ({
        userInfo: {},
        setUserInfo: (_userInfo) =>
          set((state) => ({ userInfo: { ...state.userInfo, ..._userInfo } })),
      }),
      {
        name: 'userInfo-storage',
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  )
);
