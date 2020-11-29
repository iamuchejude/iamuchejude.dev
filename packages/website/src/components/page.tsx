import { connect } from 'frontity';
import { Connect } from 'frontity/types';
import { Fragment } from 'react';

import Website from '../../types';

const Page: React.FC<Connect<Website, { when?: boolean }>> = props => {
  const { state, libraries } = props;
  const data = state.source.get(state.router.link);
  const Html2React = libraries.html2react.Component;
  const page = state.source[data.type][data.id];

  return (
    <Fragment>
      <Html2React html={page.content.rendered} />
    </Fragment>
  );
};

export default connect(Page);
