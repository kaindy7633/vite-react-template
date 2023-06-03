import { defineConfig, loadEnv } from 'vite';
import { viteMockServe } from 'vite-plugin-mock';
import react from '@vitejs/plugin-react-swc';
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
      host: '0.0.0.0',
      port: ~~env.VITE_PORT, // ~~ 用于将 string 转为 number，parseInt也可以
    },
    plugins: [react(), viteMockServe({ mockPath: './mock' })],
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
