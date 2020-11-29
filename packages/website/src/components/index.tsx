import { connect, Head } from 'frontity';
import { Connect } from 'frontity/types';
import { Fragment } from 'react';
import Switch from '@frontity/components/switch';

import Website from '../../types';

type SwitchProp = {
  when?: boolean;
};

const Loading: React.FC<SwitchProp> = () => <h1>Loading...</h1>;
const Post: React.FC<SwitchProp> = () => <h1>Hello World</h1>;
const PageError: React.FC<SwitchProp> = () => <h1>Hello World</h1>;

const Theme: React.FC<Connect<Website>> = ({ state }) => {
  const data = state.source.get(state.router.link);

  console.log(data);

  return (
    <Fragment>
      <Head>
        <html lang="en" />
        <title>Welcome to Jude</title>
      </Head>
      <Switch>
        <Loading when={data.isFetching} />
        {/* <Post when={data.isPostType} />
        <PageError when={data.isError} /> */}
      </Switch>
    </Fragment>
  );
};

export default connect(Theme);
