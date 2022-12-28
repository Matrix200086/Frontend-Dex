import React, { useState } from "react";
import { Container, Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import LaunchButton from "../launchButton/LaunchButton";
import { HeaderArea } from "./index.style";

const Header = () => {
  return (
    <>
      <HeaderArea expand="md" variant="dark">
        <Navbar.Brand href="#">
          <Link to="/">
            <img src="/images/logo.svg" alt="click here" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="mt-md-0 mt-4">
          <Nav className="ms-auto">
            <Nav.Link href="#">
              <Link to="/nexusService">Nexus-As-A Service</Link>
            </Nav.Link>
            <Nav.Link href="#">Partners</Nav.Link>
            <Nav.Link href="#">
              <LaunchButton />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </HeaderArea>
    </>
  );
};

export default Header;
