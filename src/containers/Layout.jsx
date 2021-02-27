import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = ({ children }) => (
  <div className="layout">
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
