/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  /**
   * 添加下面的代码，禁用清除浏览器默认样式
   */
  corePlugins: {
    preflight: false,
  },
};
