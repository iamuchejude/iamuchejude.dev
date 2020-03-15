import { css } from"frontity";

const primaryColor = "#141618";

const variables = css`
  :root {
    --primary-color: ${primaryColor}
  }
`;

const resets = css`
  @import url('https://fonts.googleapis.com/css?family=Inconsolata:400,700&display=swap');

  html {
    box-sizing: border-box;
    font-size: 18px;
    font-family: 'Inconsolata', monospace;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  ol, ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a {
    text-decoration: none;
  }
`;

const globalStyles = css`
  ${resets}
  ${variables}
  
  body {
    color: var(--primary-color);
  }
  
  .block {
    width: 1000px;
    margin: 0 auto;
  }
`;

export default globalStyles;
