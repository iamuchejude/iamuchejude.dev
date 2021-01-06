import React from 'react';
import { Container, About, Text, Name } from './style';

const Intro: React.FC = () => {
  return (
    <Container>
      <About>
        <p>I'm</p>
        <Name>Jude</Name>
        <Text>
          Frontend Engineer, web performance and UX enthusiast, building web
          applications that work for everyone.
        </Text>
      </About>
      <div />
      <About>
        <Text>
          For the about 7 years, I’ve been building delightful web products with
          more focus on performance and UX,
        </Text>
      </About>
    </Container>
  );
};

export default Intro;
