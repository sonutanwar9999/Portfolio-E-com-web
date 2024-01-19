import { Container, NavDropdown, Nav, Navbar } from "react-bootstrap";

import { useSelector } from "react-redux/es/hooks/useSelector";

export default function NavBar() {
  const setval = useSelector((state) => state.myfun);

  return (
    <Navbar bg="dark" expand="lg" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Amazon</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Home">Home</Nav.Link>

            <NavDropdown title="ITEMS" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Laptop">Laptop</NavDropdown.Item>
              <NavDropdown.Item href="/Mobile">Mobile</NavDropdown.Item>
              <NavDropdown.Item href="/Tablets">Tablets</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/TotalOrder">Total(Order)</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <Navbar.Collapse className="justify-content-end text-white">
          <Navbar.Text>
            <a href="#login"> cart ({setval})</a>
          </Navbar.Text>
          <Nav>
            <Nav.Link href="/Contect">Contect</Nav.Link>
            <Nav.Link href="/LogineP">Logine</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
