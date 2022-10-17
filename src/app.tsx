import React from 'react';
import { useRoutes } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import routes from '@/routes';
import { useThemeStore } from './store';

function RouteElement() {
  const element = useRoutes(routes);
  return element;
}

const App: React.FC = () => {
  // 当前默认主题
  const { prefix } = useThemeStore();

  return (
    <ConfigProvider prefixCls={prefix}>
      <div className={`App ${prefix} h-full`}>
        <RouteElement />
      </div>
    </ConfigProvider>
  );
};

export default App;
