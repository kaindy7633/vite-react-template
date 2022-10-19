import { defineConfig, loadEnv } from 'vite';
import vitePluginImp from 'vite-plugin-imp';
import { viteMockServe } from 'vite-plugin-mock';
import react from '@vitejs/plugin-react';
// 动态主题切换工具
import { resolve } from 'path';

/**
 * @description 目前 Vite 在开发时启动慢的问题暂未解决，待后续优化
 * @param paths
 * @returns
 */

export const PrefetchLazyPathsPlugin = (paths: string[] = []) => {
  return {
    name: 'prefetch-lazy-paths-plugin',
    async transformIndexHtml(html: string) {
      if (!paths.length) return html;
      let prefetchStr: string = '';
      paths.forEach((item) => {
        prefetchStr += `<link rel="prefetch" href="${item}" as="script" />`;
      });
      let newHtml = html.replace('</head>', `${prefetchStr}</head>`);
      return newHtml;
    },
  };
};

const lazyPaths = [
  '/src/layouts/AuthLayout.tsx',
  '/src/layouts/PageLayout.tsx',
  '/src/pages/Home/index.tsx',
  '/src/pages/Purchase/One',
  '/src/pages/Purchase/Two',
  '/src/pages/Warehouse/ReagentConsumables/index.tsx',
  '/src/pages/Warehouse/StandardProduct/index.tsx',
  '/src/pages/404.tsx',
  '/src/pages/Loading.tsx',
];

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  const env = loadEnv(mode, process.cwd(), '');
  return {
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      },
    },
    server: {
      port: ~~env.VITE_PORT, // ~~ 用于将 string 转为 number，parseInt也可以
    },
    plugins: [
      react(),
      vitePluginImp({
        optimize: true,
        libList: [
          {
            libName: 'antd',
            style: (name) => `antd/es/${name}/style`,
          },
        ],
      }),
      viteMockServe({ mockPath: './mock' }),
      PrefetchLazyPathsPlugin(lazyPaths),
    ],
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          // 如需定制 antd 主题，请取消以下内容注释 https://ant.design/docs/react/customize-theme
          // modifyVars: {
          //   'border-radius-base': '4px',
          // },
        },
      },
    },
  };
});
