import React from 'react';
import { styled } from 'frontity';

const Blog = () => {
  return (
    <Container>
      <h1>Blog</h1>
      <a href="/home/">Go to home</a>
    </Container>
  )
};

const Container = styled.section``;

export default Blog;
