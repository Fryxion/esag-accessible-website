import React from 'react';
import Header from './Header';
import MegaMenuNavigation from './MegaMenuNavigation';
import Footer from './Footer';
import SkipLink from '../accessibility/SkipLink';
import StatusMessage from '../accessibility/StatusMessage';

const Layout = ({ children }) => {
  return (
    <>
      <SkipLink />
      <Header />
      <MegaMenuNavigation />
      <main id="main-content" role="main" style={{ minHeight: 'calc(100vh - 200px)' }}>
        {children}
      </main>
      <Footer />
      <StatusMessage />
    </>
  );
};

export default Layout;