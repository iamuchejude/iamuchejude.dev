import { connect, styled, Global, Head } from 'frontity';
import Switch from '@frontity/components/switch';
import React, { Fragment } from 'react';

import { globalStyle } from '../styles';
import 'normalize.css';

import Loader from './loader';
import Posts from './posts';
import Page from './page';
import Home from './home';

const Theme = ({ state }) => {
  const data = state.source.get(state.router.link);

  return (
    <Fragment>
      <Head>
        <html lang="en" />
        <title>
          {state.frontity.name} - {state.frontity.description}
        </title>
        <meta name="description" content={state.frontity.description} />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@200;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Global styles={globalStyle} />

      <Main>
        <Switch>
          <Loader when={data.isFetching} />
          <Home when={data.link === '/home-beta/'} />
          <Page when={data.isHome} />
          <Posts when={data.isArchive} />
          <Error when={data.isError} />
        </Switch>
      </Main>
    </Fragment>
  );
};

const Main = styled.main``;

export default connect(Theme);
