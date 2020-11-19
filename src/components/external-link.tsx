import React, { FC } from 'react';
import styled from 'styled-components';
import PropTypes, { InferProps } from 'prop-types';

const propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

type ExternalLinkProp = InferProps<typeof propTypes>;

const ExternalLink: FC<ExternalLinkProp> = ({ href, children }) => (
  <Hyperlink href={href} target="_blank" rel="noreferrer noopener">
    {children}
  </Hyperlink>
);

const Hyperlink = styled.a``;

ExternalLink.propTypes = propTypes;

export default ExternalLink;
