import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../Assets/pre.svg";
import "./NavBar.css";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expand, setExpanded] = useState(false);
  const startScrolling = () => {
    if (window.scrollY >= 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  window.addEventListener("scroll", startScrolling);
  const IconsList = [
    {
      to: "/dashboard",
      path: "Home",
      icon: <AiOutlineHome className="icon" />,
    },
    {
      to: "/dashboard",
      path: "About",
      icon: <AiOutlineUser className="icon" />,
    },
    {
      to: "/projects",
      path: "Projects",
      icon: <AiOutlineFundProjectionScreen className="icon" />,
    },
    {
      to: "/resume",
      path: "Resume",
      icon: <CgFileDocument className="icon" />,
    },
  ];

  return (
    <Navbar expanded={expand} expand="lg" fixed="top" className={"fixed-nav"}>
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img alt="logoimg" src={logo} className="img-fluid logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          onClick={() => {
            setExpanded(expand ? false : true);
          }}
          aria-controls="responsive-navbar-nav"
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav defaultActiveKey={"#dashboard"} className="me-auto">
            {IconsList.map((icon, index) => {
              return (
                <Nav.Item key={index}>
                  <Nav.Link
                    as={Link}
                    to={icon.to}
                    onClick={() => setExpanded(false)}
                  >
                    <span>{icon.icon}</span>
                    <span> {icon.path}</span>
                  </Nav.Link>
                </Nav.Item>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
