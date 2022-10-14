import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const PageLayout: React.FC = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/warehouse">Warehouse</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

export default PageLayout;
