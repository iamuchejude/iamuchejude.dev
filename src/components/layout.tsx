import React, { FC } from 'react';
import styled from 'styled-components';
import PropTypes, { InferProps } from 'prop-types';
import Style from '../style';

const propTypes = {
  children: PropTypes.node.isRequired,
};

type LayoutProps = InferProps<typeof propTypes>;

const Layout: FC<LayoutProps> = ({ children }) => (
  <>
    <Style />
    <Wrapper>{children}</Wrapper>
  </>
);

const Wrapper = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=BioRhyme:wght@300;700&display=swap');

  font-family: 'BioRhyme', serif;
`;

export default Layout;
