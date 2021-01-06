import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Container, Menu } from './style';
import Logo from '../logo';

const Header: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Container>
      <Link to="/">
        <Logo width={50} height={50} />
      </Link>

      <Menu.Toggle
        aria-expanded={open}
        aria-controls="menu"
        onClick={() => {
          setOpen((open) => !open);
        }}
      />
    </Container>
  );
};

export default Header;
