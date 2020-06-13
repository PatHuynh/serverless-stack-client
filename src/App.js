import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav } from "react-bootstrap";
import { Auth } from "aws-amplify";

import { AppContext } from "./libs/contextLib";

import "./App.css";
import Routes from "./Routes";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const history = useHistory();
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);

  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    try {
      await Auth.currentSession();
      userHasAuthenticated(true);
    } catch (e) {
      if (e !== "No current user") {
        alert(e);
      }
    }
    setIsAuthenticating(false);
  }

  async function handleLogout() {
    await Auth.signOut();
    userHasAuthenticated(false);
    history.push("/login");
  }

  return (
    !isAuthenticating && (
      <div className="App container">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand>
            <Link to="/">Scratch</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto" activeKey="/home">
              {isAuthenticated ? (
                <>
                  <Nav.Item>
                    <LinkContainer to="/settings">
                      <Nav.Link>Settings</Nav.Link>
                    </LinkContainer>
                  </Nav.Item>
                  <Nav.Item onClick={handleLogout}>
                    <Nav.Link>Logout</Nav.Link>
                  </Nav.Item>
                </>
              ) : (
                <>
                  <Nav.Item>
                    <LinkContainer to="/signup">
                      <Nav.Link>Signup</Nav.Link>
                    </LinkContainer>
                  </Nav.Item>
                  <Nav.Item>
                    <LinkContainer to="/login">
                      <Nav.Link>Login</Nav.Link>
                    </LinkContainer>
                  </Nav.Item>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
          <Routes />
        </AppContext.Provider>
      </div>
    )
  );
}

export default App;
