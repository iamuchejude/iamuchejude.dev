import { css, keyframes } from 'frontity';

export const globalStyle = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-size: 18px;
    font-weight: 200;
    font-style: normal;
    line-height: 1.45;
    padding: 4rem 8rem;
    font-family: 'Arima Madurai', cursive;
    --webkit-font-smoothing: antialiased;

    @media screen and (max-width: 900px) {
      padding: 3rem 6rem;
    }

    @media screen and (max-width: 700px) {
      padding: 2rem 1.6rem;
    }
  }
`;

export const externalLinksStyle = css`
  transition: box-shadow 0.3s ease 0s;
  border-bottom: 1px solid #000;
  text-decoration: none;
  white-space: default;
  position: relative;
  color: #000;

  &:hover {
    border: none;
    box-shadow: rgba(0, 0, 0, 0.2) 0px -1.3em 0px inset;
  }
`;

/* crest <== quest ==> logo */
export const questStyle = css`
  margin: 0;
  width: 60px;
  height: 60px;
  margin-bottom: 3rem;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

export const spin = keyframes`
  from { transform:rotate(0deg); }
  to { transform:rotate(360deg); }
`;

export const fadeOut = keyframes`
  0% { opacity: 1 }
  100% { opacity: 0 }
`;
