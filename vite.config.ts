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
      cors: true,
      // 代理服务，示例代码
      proxy: {
        '/api': {
          target: env.VITE_PROXY_TARGET,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
        '/pdf': {
          target: 'https://xinrui-yjc-file-ejc.oss-cn-qingdao.aliyuncs.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/pdf/, '/pdf'),
        },
      },
      // ============= 开始本地 HTTPS =============================
      // https: {
      //   key: fs.readFileSync('CertKeys/agent2-key.pem'),
      //   cert: fs.readFileSync('CertKeys/agent2-cert.pem'),
      // },
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
    build: {
      // 在这里配置打包时的rollup配置
      // 配置选项参考：https://www.rollupjs.com/guide/big-list-of-options#%E6%A0%B8%E5%BF%83%E5%8A%9F%E8%83%BD-core-functionality
      // 配置实战参考1：https://juejin.cn/post/7177982374259949624
      // 配置实战参考2：https://juejin.cn/post/7157354344587722782
      rollupOptions: {
        output: {
          manualChunks: (id: string) => {
            if (id.includes('node_modules')) {
              id.toString().split('node_modules/')[1].split('/')[0].toString();
            }
          },
        },
      },
    },
  };
});
