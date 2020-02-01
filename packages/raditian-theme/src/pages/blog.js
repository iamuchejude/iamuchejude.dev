import React from 'react';
import { styled, connect } from 'frontity';

const Blog = ({ state }) => {
  return (
    <Container>
      <h1>Hello</h1>
    </Container>
  )
};

const Container = styled.section``;

export default connect(Blog);
