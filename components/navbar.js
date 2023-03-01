// components/navbar.js

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

//
const NavbarRb = ({ activeKey }) => {
  //
  return (
    <>
      <div className="my-0 sticky-top">
        <Navbar expand="sm" variant="dark">
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto" defaultActiveKey={activeKey}>
                <Nav.Link as="a" href="/">
                  News
                </Nav.Link>
                <Nav.Link as="a" href="/shows">
                  Shows
                </Nav.Link>
                <Nav.Link as="a" href="/music">
                  Music
                </Nav.Link>
                <Nav.Link as="a" href="/biography">
                  Biography
                </Nav.Link>
                <Nav.Link as="a" href="/media">
                  Media kit
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default NavbarRb;
