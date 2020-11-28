import React, { FC } from 'react';
import styled from 'styled-components';
import PropTypes, { InferProps } from 'prop-types';

const propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

type AnchorProp = InferProps<typeof propTypes>;

const Anchor: FC<AnchorProp> = ({ href, children }) => (
  <StyledAnchor href={href} target="_blank" rel="noreferrer noopener">
    {children}
  </StyledAnchor>
);

const StyledAnchor = styled.a`
  text-decoration: none;
  position: relative;
  color: inherit;

  :after {
    background: rgba(0, 0, 0, 0.15);
    position: absolute;
    height: 40%;
    content: '';
    width: 100%;
    bottom: 0;
    left: 0;
  }
`;

Anchor.propTypes = propTypes;

export default Anchor;
