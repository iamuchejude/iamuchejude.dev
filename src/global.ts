import styled, { createGlobalStyle } from 'styled-components';

export const BaseStyle = createGlobalStyle`
  :root {
    --color-white: #fff;
    --color-gold: #CF8B00;
    --color-black: #111111;

    --header-height: 100px;
    --content-padding: 8rem;

    --base-text-size: 16px;
    --font-family: 'Barlow', sans-serif;
  }

  *,
  *:before
  *:after {
    margin: 0;
    padding: 0;
    outline: none;
    color: red !important;
    box-sizing: border-box;
  }

  body {
    color: var(--color-white);
    background: var(--color-black);
    font-size: var(--base-text-size);
    font-family: var(--font-family);
  }

  a {
    text-decoration: none;
    color: var(--color-gold);
  }

  button,
  [type=button],
  [role=button] {
    cursor: pointer;
  }
`;

export const Main = styled.main``;
