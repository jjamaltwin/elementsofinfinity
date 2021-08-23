import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import { Navbar, Nav, Image } from "react-bootstrap";

import Purchase from "./Purchase";
import Contact from "./Contact";

class NavBar extends React.Component {
  render() {
    return (
      <div className="">
        <div className="col-md-12">
          <Router>
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
              <Navbar.Brand className="logo" href="/">
                <Image
                  className="img-fluid"
                  src="ai.jpg"
                  alt="Responsive image"
                  width="100%"
                  opacity="1"
                ></Image>
              </Navbar.Brand>
              <Navbar bg="dark" id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/contact">Contact </Nav.Link>
                  <Nav.Link href="/purchase">Purchase</Nav.Link>
                  <Nav.Link href="/events">Events</Nav.Link>
                  <Nav.Link href="/reviews">Reviews</Nav.Link>
                  <Nav.Link href="/bie">Bio</Nav.Link>
                </Nav>
              </Navbar>
            </Navbar>
            <br />
          </Router>
        </div>
      </div>
    );
  }
}

export default NavBar;
