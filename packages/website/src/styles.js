import { css } from 'frontity';

export const globalStyle = css`
  :root {
    --text-color: #fff;
    --base-font-size: 16px;
    --background-color: #000;
    --content-width: 1000px;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
  }

  body {
    font-weight: 200;
    font-style: normal;
    line-height: 1.6;
    color: var(--text-color);
    font-family: 'Barlow', sans-serif;
    font-size: var(--base-font-size);
    background: var(--background-color);

    img {
      max-width: 100%;
    }

    .introduction {
      height: 65vh;
      margin: 0 auto;
      position: relative;
      width: var(--content-width);

      display: grid;
      grid-gap: 4rem;
      grid-template-columns: 1fr 300px 1fr;

      figure {
        position: relative;
        width: 300px;

        :after {
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          content: ' ';
          position: absolute;
          background: linear-gradient(to bottom, transparent, #000);
        }
      }

      > div {
        :first-child {
          align-self: flex-start;

          h3 {
            font-size: 2rem;
            line-height: 30px;
            margin-bottom: 1rem;
          }

          p:first-child {
            display: flex;
            position: relative;
            align-items: center;

            :before {
              height: 1px;
              content: ' ';
              width: 0.5em;
              background: #fff;
              margin-right: 0.2rem;
            }
          }
        }

        :nth-child(2) {
          align-self: center;
        }

        :last-child {
          align-self: flex-end;
        }
      }
    }
  }
`;
