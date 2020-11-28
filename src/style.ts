import { createGlobalStyle } from 'styled-components';

const Style = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=BioRhyme:wght@300;700&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'BioRhyme', serif;
    font-size: 16px;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default Style;
