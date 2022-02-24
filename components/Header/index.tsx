import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

function Header() {
  return (
    <Navbar
      className="position-sticky ps-0"
      collapseOnSelect
      bg="dark"
      expand="sm"
      variant="dark"
      fixed="top"
    >
      <Container fluid>
        <Navbar.Brand href="/" className="brand d-flex-center">
          <img
            alt=""
            src="/icon/Cat.svg"
            width="40"
            height="40"
            className="d-inline-block align-top"
          />{" "}
          Aliceland
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav>
            <Nav.Link href="/">О породе</Nav.Link>
            <Nav.Link href="/">Выставки</Nav.Link>
            <Nav.Link href="/">Выпускники</Nav.Link>
            <Nav.Link href="/pain">Покупка</Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <a href="https://www.instagram.com/aliceland_cats/">
                <img
                  src="/icon/instagram.svg"
                  alt="Bootstrap"
                  width="32"
                  height="32"
                />
              </a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
