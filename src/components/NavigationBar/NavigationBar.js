import React, { useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import styles from "./NavigationBar.module.css";

const NavigationBar = (props) => {
  const [expanded, setExpanded] = useState(false);

  const handleSelect = (eventKey) => {
    setExpanded(false);
    props.setCurrentTab(eventKey);
  };

  return (
    <Navbar
      sticky="top"
      variant="dark"
      expand="lg"
      style={{
        padding: "0.5em",
        boxShadow: "0px 2px 8px rgba(0,0,0,0.5)",
        background: "rgba(36,36,36,1)",
      }}
      expanded={expanded}
    >
      <Container fluid>
        <Navbar.Brand style={{ color: "white", fontWeight: "500" }}>
          SkyScraper Discord Weather Bot
        </Navbar.Brand>
        <Navbar.Toggle
          className="ms-auto"
          aria-controls="basic-navbar-nav"
          style={{ color: "white" }}
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="ms-auto"
            activeKey={props.currentTab}
            onSelect={handleSelect}
          >
            <Nav.Link
              eventKey="home"
              className={
                props.currentTab === "home"
                  ? styles.activeLink
                  : styles.inactiveLink
              }
            >
              Home
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
