# vite-react-template

> 基于vite创建的React Typescript工程模版

## 简介

这是一个基于 `vite` 创建的 `React Typescript` 工程模版项目，项目包含eslint、prettier、tailwind等各项配置，环境变量配置支持开发、数据Mock、测试和生产

## 安装

使用官方推荐，使用 `pnpm` 安装依赖

```bash
pnpm install
```

## 状态管理

该模版采用 `zustand` 作为全局状态管理框架，它具有体积小，无模版代码，无需 `Provider` 等优点，具体请参考官方：<https://github.com/pmndrs/zustand>

## 配置

## 开发

## 版本说明

项目中版本需要遵循 [semver](http://caibaojian.com/npm/misc/semver.html). 规范，该规范的标准版本号采用 `X.Y.Z` 的格式。

- `alpha`：是内部测试版,一般不向外部发布,会有很多 `Bug`. 一般只有测试人员使用。
- `beta`：也是测试版，这个阶段的版本会一直加入新的功能。在 `alpha` 版之后推出。
- `rc` (`Release Candidate`)：最终测试版本；可能成为最终产品的候选版本，如果未出现问题则可发布成为正式版本。

示例：`1.2.0-beta.1`，`1.0.1-alpha.1`，`3.0.0-rc.1`

## ChangeLog

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

- 2022年8月项目初始化完成，集成 `Vite`, `Ant Design`， `TailwindCSS`等。
