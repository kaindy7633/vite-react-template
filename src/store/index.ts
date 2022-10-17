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
import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type TTestStoreProps = {
  votes: number;
  addVotes: () => void;
  subtractVotes: () => void;
};

type TTokenStoreProps = {
  token: string;
  setToken: () => void;
};

type TThemeStoreProps = {
  prefix: string;
  setPrefix: (_prefix: string) => void;
};

export const useTokenStore = create<TTokenStoreProps>()(
  devtools(
    persist(
      (set, get) => ({
        token: '',
        setToken: () => set((state) => ({ token: '1234' })),
      }),
      {
        name: 'food-storage', // unique name
        getStorage: () => sessionStorage, // (optional) by default, 'localStorage' is used
      }
    )
  )
);

// 定义 Store，并导出
export const useStore = create<TTestStoreProps>((set) => ({
  votes: 0,
  addVotes: () => set((state) => ({ votes: state.votes + 1 })),
  subtractVotes: () => set((state) => ({ votes: state.votes - 1 })),
}));

/**
 * @TODO 定义切换主题变量
 */
export const useThemeStore = create<TThemeStoreProps>()(
  devtools(
    persist(
      (set, get) => ({
        prefix: 'default',
        setPrefix: (_prefix) => set(() => ({ prefix: _prefix })),
      }),
      {
        name: 'food-storage', // unique name
      }
    )
  )
);
