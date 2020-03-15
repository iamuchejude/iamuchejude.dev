import React from 'react';
import { styled, connect } from 'frontity';

const Home = () => {
  return (
		<Container>
      <h1>I am home</h1>
		</Container>
	);
};

const Container = styled.section``;

export default connect(Home);
