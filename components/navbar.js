// components/navbar.js

import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

//
const NavbarRb = ({ activeKey }) => {
  //
  return (
    <>
      <div className="my-0 sticky-top">
        <Navbar expand="md" variant="dark">
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto" defaultActiveKey={activeKey}>
                <Nav.Link as="a" href="/">
                  Home
                </Nav.Link>
                {/* <Nav.Link as="a" href="/#content">
                  News
                </Nav.Link> */}
                <Nav.Link as="a" href="/shows#content">
                  Shows
                </Nav.Link>
                <Nav.Link as="a" href="/music#content">
                  Music
                </Nav.Link>
                <Nav.Link as="a" href="/biography#content">
                  Biography
                </Nav.Link>
                <Nav.Link as="a" href="/media#content">
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
