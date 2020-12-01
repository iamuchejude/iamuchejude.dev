import { css, keyframes } from 'frontity';

export const globalStyle = css`
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

    @media screen and (max-width: 900px) {
      padding: 3rem 6rem;
    }

    @media screen and (max-width: 700px) {
      padding: 2rem 1.6rem;
    }
  }
`;

export const externalLinksStyle = css`
  border-bottom: 1px solid #000;
  text-decoration: none;
  transition: all 0.4s;
  white-space: default;
  position: relative;
  color: #000;

  &:hover {
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
