import Image from "next/image";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

import darkLogo from "@/assets/images/logo-dark.svg";

import navbarStyles from "./Navbar.module.scss";

const AppNavbar = () => {
  return (
    <div className={navbarStyles.root}>
      <Navbar expand="lg" className={navbarStyles.appnavbar}>
        <Container>
          <Navbar.Brand href="#home" className={navbarStyles.logo}>
            <Image src={darkLogo} alt="Shortly" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className={navbarStyles.togglebtn}
          />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className={navbarStyles.navcollapse}
          >
            <Nav className="mr-auto">
              <Nav.Link href="#home" className={navbarStyles.navlink}>
                Features
              </Nav.Link>
              <Nav.Link href="#link" className={navbarStyles.navlink}>
                Pricing
              </Nav.Link>
              <Nav.Link href="#link" className={navbarStyles.navlink}>
                Resources
              </Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              <Nav.Link href="#home" className={navbarStyles.navlinkright}>
                Login
              </Nav.Link>
              <Button className="btn-rounded-custom-primary-normal">
                Signup
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default AppNavbar;
