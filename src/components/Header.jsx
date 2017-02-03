import React from 'react';
import { Navbar } from 'react-bootstrap';

// functional component that renders to the page
const Header = () => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <p>DOMAINS LIST</p>
        </Navbar.Brand>
      </Navbar.Header>
    </Navbar>
  );
};

export default Header;