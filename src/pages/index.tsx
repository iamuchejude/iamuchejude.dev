import React, { FC } from 'react';
import { Layout, Anchor } from '../components';

const Index: FC = () => {
  return (
    <Layout>
      I'm a{' '}
      <Anchor href="https://google.com">Frontend Engineer</Anchor>,
      I'm spent most of my day talking about{' '}
      <Anchor href="https://google.com">UX Design</Anchor>. Now, I'm
      either{' '}
      <Anchor href="https://github.com/iamuchejude">coding</Anchor>,
      liking or retweeting since I rarely . I'd also love to reach
      more persons by{' '}
      <Anchor href="https://twitter.com/iamuchejude">writing</Anchor>{' '}
      on a personal blog or create video content on{' '}
      <Anchor href="https://twitter.com/iamuchejude">YouTube</Anchor>.
    </Layout>
  );
};

export default Index;
