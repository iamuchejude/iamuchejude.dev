import { css, keyframes } from 'frontity';

export const globalStyle = css`
  :root {
    --primary-color: #000;
  }

  * {
    box-sizing: border-box;
  }

  body {
    font-size: 20px;
    font-weight: 300;
    font-style: normal;
    line-height: 1.6;
    padding: 4rem 8rem;
    font-family: 'Josefin Sans', sans-serif;
    --webkit-font-smoothing: antialiased;
  }
`;

export const externalLinksStyle = css`
  text-decoration: none;
  white-space: nowrap;
  position: relative;
  border-bottom: 1px solid #000;
  transition: all 0.4s;
  color: inherit;

  &:hover {
    color: #000;
    border: none;
    background-color: rgba(0, 0, 0, 0.15);
  }
`;

/* crest <== quest ==> logo */
export const questStyle = css`
  margin: 0;
  width: 70px;
  height: 70px;
  margin-bottom: 3rem;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const fadeIn = keyframes`
  0% { opacity: 0 }
  100% { opacity: 1 }
`;

export const spin = keyframes`
  from { transform:rotate(0deg) }
  to { transform:rotate(360deg) }
`;

export const fadeOut = keyframes`
  0% { opacity: 1 }
  100% { opacity: 0 }
`;
