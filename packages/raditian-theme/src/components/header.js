import { styled } from 'frontity';

const Header = () => (
  <Container>
    <Row>
      <LogoContainer>
        <a href="/">UJ</a>
      </LogoContainer>

      <MenuContainer>
        <MenuIcon>
          <div />
        </MenuIcon>
      </MenuContainer>
    </Row>
  </Container>
);

const Container = styled.header`
  height: 4.5rem;
  top: 0;
  position: fixed;
  z-index: 2;
  width: 100%;
  background: transparent;
`;

const Row = styled.div` 
  width: 1200px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: space-between;
  
  & > div {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const LogoContainer = styled.div`
  a {
    color: var(--primary-color);
    font-weight: bold;
    font-size: 1.8em;
  }
`;

const MenuContainer = styled.div``;

const MenuIcon = styled.a`
  margin: 1em;
  width: 38px;
  cursor: pointer;

  /* &:hover {
    & > div {
      transform: scale(0);
    }

    &::after {
      width: 100%;
      transform: translateY(-12px) rotate(-135deg);
    }

    &:before {
      transform: translateY(12px) rotate(135deg);
    }
  } */

  & > div,
  &::after,
  &::before {
    cursor: pointer;
    background-color: var(--primary-color);
    border-radius: 3px;
    content: '';
    display: block;
    height: 2px;
    margin: 2.5px 0;
    transition: all .2s ease-in-out;
    float: right;
  }

  & > div {
    width: 85%;
  }

  &::after {
    width: 65%;
  }

  &::before {
    width: 100%;
  }
`;

export default Header;
