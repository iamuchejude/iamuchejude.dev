import React, { Fragment } from 'react';
import { connect, styled, Global, Head, keyframes } from 'frontity';
import Switch from '@frontity/components/switch';
import { globalStyle, fadeIn } from '../styles';
import Loading from './loading';
import Page from './page';

const Theme = ({ state }) => {
  const data = state.source.get(state.router.link);

  return (
    <Fragment>
      <Head>
        <html lang="en" />
        <title>Uche Jude - Web Frontend Engineer</title>
        <meta name="description" content={state.frontity.description} />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Global styles={globalStyle} />

      <Main>
        <Switch>
          <Loading when={data.isFetching} />
          <Page when={data.isHome} />
          <Error when={data.isError} />
        </Switch>
      </Main>
    </Fragment>
  );
};

const Main = styled.main`
  max-width: 600px;
  width: 100%;

  p,
  figure {
    animation: ${fadeIn} 1s linear;
  }
`;

export default connect(Theme);
