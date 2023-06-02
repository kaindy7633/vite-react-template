import { codeMessage } from '@/constants';

declare module 'PrefetchLazyPathsPlugin';

export interface ComponentModule {
  default: React.ComponentType;
}

export interface LazyOptions {
  loader: () => Promise<ComponentModule>;
  loading: React.ComponentType;
}

/**
 * @TODO 网络请求响应体 Response 类型定义
 */
export type TResponseModel = {
  code: keyof codeMessage;
  msg: string;
  data: unknown;
};
