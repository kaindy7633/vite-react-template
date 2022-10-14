import React, { lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import Loading from '@/pages/Loading';

const PageLayout = lazy(() => import('@/layouts/PageLayout'));
const Home = lazy(() => import('@/pages/Home'));
const Warehouse = lazy(() => import('@/pages/Warehouse'));
const AuthLayout = lazy(() => import('@/layouts/AuthLayout'));
const Singin = lazy(() => import('@/pages/Auth/Singin'));
const NotFound = lazy(() => import('@/pages/404'));

const routes: RouteObject[] = [
  // 页面路由策略
  {
    path: '/',
    element: (
      <React.Suspense fallback={<Loading />}>
        <PageLayout />
      </React.Suspense>
    ),
    children: [
      {
        path: '/',
        element: (
          <React.Suspense fallback={<Loading />}>
            <Home />
          </React.Suspense>
        ),
      },
      {
        path: '/warehouse',
        element: (
          <React.Suspense fallback={<Loading />}>
            <Warehouse />
          </React.Suspense>
        ),
      },
    ],
  },
  // 其他不需要 PageLayout 控制的页面
  {
    path: '/auth',
    element: (
      <React.Suspense fallback={<Loading />}>
        <AuthLayout />
      </React.Suspense>
    ),
    children: [
      {
        path: '/auth/singin',
        element: (
          <React.Suspense fallback={<Loading />}>
            <Singin />
          </React.Suspense>
        ),
      },
    ],
  },
  // 未匹配上的路由 404
  {
    path: '/*',
    element: (
      <React.Suspense fallback={<Loading />}>
        <NotFound />
      </React.Suspense>
    ),
  },
];

export default routes;
