import React from 'react';
import { styled } from 'frontity';

import Index from '../pages/index';

import Header from './header';
import Footer from './footer';

const Theme = () => {
  return (
    <Wrapper>
      <Header />
      <Main>
        <Index />
      </Main>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Main = styled.main``;

export default Theme;
