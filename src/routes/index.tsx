import { lazy, useEffect } from 'react';
import {
  IndexRouteObject,
  Location,
  NavigateFunction,
  NonIndexRouteObject,
  useLocation,
  useNavigate,
  useRoutes,
} from 'react-router-dom';
import { APP_TITLE } from '@/constants';

const PageLayout = lazy(() => import('@/layouts/PageLayout'));
const Home = lazy(() => import('@/pages/Home'));
const PurchaseOne = lazy(() => import('@/pages/Purchase/One'));
const PurchaseTwo = lazy(() => import('@/pages/Purchase/Two'));
const StandardProduct = lazy(() => import('@/pages/Warehouse/StandardProduct'));
const ReagentConsumables = lazy(
  () => import('@/pages/Warehouse/ReagentConsumables')
);

const AuthLayout = lazy(() => import('@/layouts/AuthLayout'));
const Singin = lazy(() => import('@/pages/Auth/Singin'));
const NotFound = lazy(() => import('@/pages/404'));

type CustomRoutePerpies = {
  title?: string;
};

type TIndexRouteObject = IndexRouteObject & CustomRoutePerpies;
type TNonIndexRouteObject = NonIndexRouteObject &
  CustomRoutePerpies & {
    children?: TNonIndexRouteObject[];
  };

type CustomRouteObject = TIndexRouteObject | TNonIndexRouteObject;

export const routes: CustomRouteObject[] = [
  // 页面路由策略
  {
    element: <PageLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
        title: '首页',
      },
      {
        path: '',
        title: '采购管理',
        children: [
          {
            path: '/purchase/one',
            element: <PurchaseOne />,
            title: '采购管理 - 选项一',
          },
          {
            path: '/purchase/two',
            element: <PurchaseTwo />,
            title: '采购管理 - 选项二',
          },
        ],
      },
      {
        path: '',
        title: '仓库管理',
        children: [
          {
            path: '/warehouse/standard-product',
            element: <StandardProduct />,
            title: '标准品管理',
          },
          {
            path: '/warehouse/reagent-consumables',
            element: <ReagentConsumables />,
            title: '试剂耗材管理',
          },
        ],
      },
      // 未匹配上的路由 404
      {
        path: '/*',
        element: <NotFound />,
        title: '未知页面',
      },
    ],
  },
  // 其他不需要 PageLayout 控制的页面
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: '/auth/singin',
        element: <Singin />,
        title: '用户登录',
      },
    ],
  },
];

/**
 * @description 递归查询对应的路由
 * @param path
 * @param routes
 * @returns
 */
export function searchRouteDetail(
  path: string,
  routes: CustomRouteObject[]
): CustomRouteObject | null {
  for (let item of routes) {
    if (item.path === path) return item;
    if (item.children) {
      return searchRouteDetail(path, item.children);
    }
  }
  return null;
}

/**
 * @description 全局路由守卫
 * @param location
 * @param navigate
 * @param routes
 * @returns
 */
function guard(
  location: Location,
  navigate: NavigateFunction,
  routes: CustomRouteObject[]
) {
  const { pathname } = location;

  //找到对应的路由信息
  const routedetail = searchRouteDetail(pathname, routes);

  //没有找到路由，跳转404
  if (!routedetail) {
    return false;
  }

  /**
   * @TODO 动态自定义窗口标题
   */
  if (routedetail.title) {
    document.title = `${APP_TITLE} - ${routedetail.title}`;
  } else {
    document.title = `${APP_TITLE}`;
  }

  //如果需要权限验证
  // if (routedetail.auth) {
  //   const token = localStorage.getItem('jiang_blog_token');
  //   if (!token) {
  //     message.warn('请登录');
  //     navigate(-1);
  //     return false;
  //   }
  // }
  return true;
}

export const RouterGurad = (routes: CustomRouteObject[]) => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    guard(location, navigate, routes);
  }, [location, navigate, routes]);
  const Route = useRoutes(routes);
  return Route;
};
