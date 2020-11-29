import { connect } from "frontity";
import { Fragment } from "react";

const Theme = () => {
  return (
    <Fragment>
      <h1>Hello</h1>
    </Fragment>
  );
};

export default connect(Theme, {
  injectProps: false,
});
