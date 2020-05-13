import { useState } from "react";
import { styled } from 'frontity';

const Header = () => {
  const [menuExpanded, setMenuExpanded] = useState(false);

  return (
    <Container>
      <Row>
        <LogoContainer>
          <a href="/">UJ</a>
        </LogoContainer>

        <MenuContainer>
          <MenuIcon onClick={ () => setMenuExpanded(!menuExpanded) }>
            <div />
          </MenuIcon>

          {/* Uses, Projects, Contact */}

          <ContextMenu data-expanded={ `${menuExpanded}` }>
            <MenuList>
              <MenuItem>
                <a href="#">Tools</a>
              </MenuItem>
              <MenuItem>
                <a href="/blog">Articles</a>
              </MenuItem>
              <MenuItem>
                <a href="#">Projects</a>
              </MenuItem>
              <MenuItem>
                <a href="#">Contact</a>
              </MenuItem>
            </MenuList>
          </ContextMenu>
        </MenuContainer>
      </Row>
    </Container>
  );
}

const Container = styled.header`
  height: 5rem;
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

const ContextMenu = styled.div`
  position: fixed;
  background: #fff;
  padding: 3.4rem 2rem 2rem;
  right: 16.5em;
  top: 1em;

  & > * {
    display: none;
  }

  &[data-expanded="true"] {
    transition: .5s ease-in-out;
    z-index: 3;
    position: fixed;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, .1);
    width: 250px;

    & > * {
      display: inherit;
    }
  }
`;

const MenuList = styled.ul`
  list-style: none;
`;

const MenuItem = styled.li`
  display: block;
  margin: 1.2em 0;

  &:first-of-type {
    margin-top: 0;
  }

  &:last-of-type {
    margin-bottom: 0;
  }

  a {
    color: var(--primary-color);
  }
`;

const MenuIcon = styled.a`
  width: 38px;
  cursor: pointer;
  z-index: 999;

  & > div,
  &::after,
  &::before {
    cursor: pointer;
    background-color: var(--primary-color);
    border-radius: 3px;
    content: '';
    display: block;
    height: 2px;
    margin: 2.3px 0;
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
