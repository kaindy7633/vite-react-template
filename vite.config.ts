import { defineConfig, loadEnv } from 'vite';
import vitePluginImp from 'vite-plugin-imp';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

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
    ],
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          // 如需定制 antd 主题，请取消以下内容注释 https://ant.design/docs/react/customize-theme
          // modifyVars: {
          //   hack: `true; @import "./src/theme.less";`,
          // },
        },
      },
    },
  };
});
