import { connect } from 'frontity';

const Page = ({ state, libraries }) => {
  const HTML2React = libraries.html2react.Component;
  const data = state.source.get(state.router.link);
  const page = state.source[data.type][data.id];

  if (data.isReady) {
    return <HTML2React html={page.content.rendered} />;
  }

  return null;
};

export default connect(Page);
