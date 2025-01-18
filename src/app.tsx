import React from 'react';
import { ConfigProvider } from 'antd';
import { RouterGurad, routes } from '@/routes';
// for date-picker i18n
import 'dayjs/locale/zh-cn';
import Loading from '@/components/Loading';
import { useLocaleStore, useThemeStore } from './store';

const App: React.FC = () => {
  // 当前主题设置
  const { theme } = useThemeStore();
  // 当前系统语言
  const { locale } = useLocaleStore();

  return (
    <ConfigProvider locale={locale} theme={theme}>
      <React.Suspense fallback={<Loading />}>
        <div className={`App h-[100vh]`}>{RouterGurad(routes)}</div>
      </React.Suspense>
    </ConfigProvider>
  );
};

export default App;
