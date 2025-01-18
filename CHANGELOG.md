# ChangeLog

- 2025年1月
  - 升级 `Antd` 版本到 `5.23.1`
  - 修改了 `Zustand` 中 `useTokenStore` 的配置
  - 在 `Zustand` 中添加了 `useLocaleStore` 的配置, 并修改了 `App.tsx` 文件，添加了 `dayjs` 的 `locale` 配置

- 2024年10月
  - 创建工具函数文件，新建了 `generateRandomString` 函数，用于生成随机字符串

- 2024年08月
  - 升级 antd 到 5.20.3 版本
  - 升级 pro-component 到 2.7.15 版本

- 2023年12月
  - 升级 `Antd` 版本到 `5.12.5`
  - 升级 `Zustand` 版本到 `4.4.7`
  - 修改 `zustand` 升级后的配置文件，使用新的 `API`。
  - 使用 `Suspense` 特性在组件加载时加入缓动效果，解决组件切换时页面闪动的问题
  - 新增 `Dockerfile` 文件，在项目需要时使用 `docker build` 将项目打包成 `docker` 镜像

- 2023年11月
  - 升级 `Antd` 版本到 `5.11.0`
  - 升级 `Vite` 版本到 `4.5.0`
  - 优化 `request.ts` 中封装的网络请求拦截器，优化 `zustand store` 中关于 `token` 的配置，并应用到 `request` 网络请求库中.

- 2023年10月
  - 升级 `Ant` 版本到 `5.9.4`
  - Vite配置添加代理示例代码、修改 `plugins` 选项、添加 `build` 选项以优化编译后的包大小

- 2023年8月
  - 修改并移植全局 Loaidng 组件到 components 目录

- 2023年7月
  - 升级 `Ant` 版本到 `5.7.2`
  - 升级 `Vite` 版本到 `4.4.6`
  - 新增 `gitlab-ci.ymml` 配置文件，方便进入开发阶段后进行 `CI/CD` 操作

- 2023年6月升级 Ant 版本

- 2023年1月升级 `Vite` 版本到 4.x，并且升级 Ant 到 5.x 版本

- 2022年10月完成 `Vite` 升级及其配置改写

- 2022年8月项目初始化完成，集成 `Vite`, `Ant Design`， `TailwindCSS`等
