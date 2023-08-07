import React, { useState } from 'react';
import { ConfigProvider } from 'antd';
import { Locale } from 'antd/es/locale';
import zhCN from 'antd/lib/locale/zh_CN';
import { RouterGurad, routes } from '@/routes';
import Loading from '@/components/Loading';
import { useThemeStore } from './store';

const App: React.FC = () => {
  // 当前主题设置
  const { theme } = useThemeStore();

  // 当前系统语言
  const [locale] = useState<Locale>(zhCN);

  return (
    <ConfigProvider locale={locale} theme={theme}>
      <React.Suspense fallback={<Loading />}>
        <div className={`App h-[100vh]`}>{RouterGurad(routes)}</div>
      </React.Suspense>
    </ConfigProvider>
  );
};

export default App;
