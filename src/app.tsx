import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from '@/routes';

function RouteElement() {
  const element = useRoutes(routes);
  return element;
}

const App: React.FC = () => {
  return <RouteElement />;
};

export default App;
