import React from 'react';
import { Main } from '../global';
import Layout from '../components/layout';
import Intro from '../components/intro';

const Index: React.FC = () => {
  return (
    <Layout>
      <Main>
        <Intro />
      </Main>
    </Layout>
  );
};

export default Index;
