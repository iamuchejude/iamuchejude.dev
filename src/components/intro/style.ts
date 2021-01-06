import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
  padding: 0 var(--content-padding);
  height: calc(var(--header-height) + 50vh);
  grid-template-columns: 300px 1fr 300px;
`;

export const About = styled.div``;

export const Text = styled.p``;

export const H2 = styled.h2``;

export const Name = styled.h1`
  /* color: var(--color-gold); */
  font-weight: 700;
  font-size: 2.4rem;
  -webkit-text-stroke: 2px transparent;
  --webkit-text-fill-color: transparent;
`;
