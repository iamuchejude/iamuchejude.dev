import { connect } from 'frontity';

const Posts = ({ state }) => {
  const data = state.source.get(state.router.link);
  const posts = state.source[data.type];
  return <h1>All posts</h1>;
};

export default connect(Posts);
