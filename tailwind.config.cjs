/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        cur: '0 3px 10px 0 rgb(48 46 56 / 6%);',
      },
    },
  },
  plugins: [],
  /**
   * 添加下面的代码，禁用清除浏览器默认样式
   */
  corePlugins: {
    preflight: false,
  },
};
