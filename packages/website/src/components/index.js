import { connect, styled, Global, Head } from 'frontity';
import Switch from '@frontity/components/switch';
import React, { Fragment } from 'react';

import { globalStyle, fadeIn } from '../styles';

import Loader from './loader';
import Posts from './posts';
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
          href="https://fonts.googleapis.com/css2?family=Arima+Madurai:wght@200;400&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Global styles={globalStyle} />

      <Main>
        <Switch>
          <Loader when={data.isFetching} />
          <Page when={data.isHome} />
          <Posts when={data.isArchive} />
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
