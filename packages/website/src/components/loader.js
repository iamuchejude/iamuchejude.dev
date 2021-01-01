import { connect } from 'frontity';

const Loader = ({ state }) => {
  const data = state.source.get(state.router.link);

  return (
    <SVG
      fill="none"
      width="100"
      height="100"
      viewBox="0 0 310 310"
      className={!data.isFetching ? 'fade-out' : ''}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M229 285.506C207.164 297.914 181.91 305 155 305C72.1573 305 5 237.843 5 155C5 72.1573 72.1573 5 155 5C237.843 5 305 72.1573 305 155C305 182.115 297.805 207.55 285.221 229.5"
        stroke="black"
        strokeWidth="10"
      />
      <path
        d="M296 256C296 278.091 278.091 296 256 296C233.909 296 216 278.091 216 256C216 233.909 233.909 216 256 216C278.091 216 296 233.909 296 256Z"
        stroke="black"
        strokeWidth="10"
      />
    </SVG>
  );
};

export default connect(Loader);
