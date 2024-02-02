import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
//import { GoMarkGithub } from "react-icons/go";
import {
    AiFillGithub,
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
    const [expand, updateExpanded] = useState(false);
    const [navColour, updateNavbar] = useState(false);

    function scrollHandler() {
        if (window.scrollY >= 20) {
            updateNavbar(true);
        } else {
            updateNavbar(false);
        }
    }

    window.addEventListener("scroll", scrollHandler);

    return (
        <Navbar
            expanded={expand}
            fixed="top"
            expand="md"
            className={navColour ? "sticky" : "navbar"}
        >
            <Container>
                <Navbar.Brand href="/" className="d-flex">
                    <img src={logo} className="img-fluid logo" alt="brand" />
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="responsive-navbar-nav"
                    onClick={() => {
                        updateExpanded(expand ? false : "expanded");
                    }}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto" defaultActiveKey="#home">
                        <Nav.Item>
                            <Link
                                className="nav-link"
                                to="/"
                                onClick={() => updateExpanded(false)}
                            >
                                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
                            </Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Link
                                className="nav-link"
                                to="/about"
                                onClick={() => updateExpanded(false)}
                            >
                                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
                            </Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Link
                                className="nav-link"
                                to="/projects"
                                onClick={() => updateExpanded(false)}
                            >
                                <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} />{" "} Projects
                            </Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Link
                                className="nav-link"
                                to="/resume"
                                onClick={() => updateExpanded(false)}
                            >
                                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
                            </Link>
                        </Nav.Item>

                        <Nav.Item className="fork-btn">
                            <Button
                                href="https://github.com/falrabadi/falrabadi.github.io"
                                target="_blank"
                                className="fork-btn-inner"
                            >
                                <AiFillGithub style={{ fontSize: "1.5em" }} />{" "}
                            </Button>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;