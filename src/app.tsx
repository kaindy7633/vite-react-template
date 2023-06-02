import React, { useState } from 'react';
import { ConfigProvider } from 'antd';
import { Locale } from 'antd/es/locale';
import zhCN from 'antd/lib/locale/zh_CN';
import { RouterGurad, routes } from '@/routes';
import Loading from '@/pages/Loading';
import { useThemeStore } from './store';

const App: React.FC = () => {
  // 当前默认主题
  const { prefix } = useThemeStore();

  // 当前系统语言
  const [locale] = useState<Locale>(zhCN);

  return (
    <ConfigProvider prefixCls={prefix} locale={locale}>
      <React.Suspense fallback={<Loading />}>
        <div className={`App ${prefix} h-[100vh]`}>{RouterGurad(routes)}</div>
      </React.Suspense>
    </ConfigProvider>
  );
};

export default App;
