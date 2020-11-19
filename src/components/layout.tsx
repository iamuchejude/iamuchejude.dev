import React, { FC } from 'react';
import styled from 'styled-components';
import PropTypes, { InferProps } from 'prop-types';

const propTypes = {
  children: PropTypes.node.isRequired,
};

type LayoutProps = InferProps<typeof propTypes>;

const Layout: FC<LayoutProps> = ({ children }) => (
  <Wrapper>{children}</Wrapper>
);

const Wrapper = styled.div``;

export default Layout;
