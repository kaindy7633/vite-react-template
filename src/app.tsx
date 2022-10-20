import React from 'react';
import { ConfigProvider } from 'antd';
import { RouterGurad, routes } from '@/routes';
import Loading from '@/pages/Loading';
import { useThemeStore } from './store';

const App: React.FC = () => {
  // 当前默认主题
  const { prefix } = useThemeStore();

  return (
    <ConfigProvider prefixCls={prefix}>
      <React.Suspense fallback={<Loading />}>
        <div className={`App ${prefix} h-[100vh]`}>{RouterGurad(routes)}</div>
      </React.Suspense>
    </ConfigProvider>
  );
};

export default App;
