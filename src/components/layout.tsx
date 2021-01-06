import React, { FC, Children, Fragment } from 'react';
import { BaseStyle } from '../global';
import Header from './header';
import Footer from './footer';
import Head from './head';

const Layout: FC = ({ children }) => {
  return (
    <Fragment>
      <Head />
      <BaseStyle />
      <Header />
      {Children.only(children)}
      <Footer />
    </Fragment>
  );
};

export default Layout;
