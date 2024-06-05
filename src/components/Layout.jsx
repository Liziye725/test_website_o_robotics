import React from 'react';
import Menu from './components/menu/Menu';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Menu />
      <div className="content">
        {children}
      </div>
    </div>
  );
}

export default Layout;
