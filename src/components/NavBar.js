import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
    render() {
        return (
            <Navbar default collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Brúðkaup</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} componentClass={Link} href="/" to="/">
                            Forsíða
                        </NavItem>
                        <NavItem eventKey={2} componentClass={Link} href="/toastmasters" to="/toastmasters">
                            Veislustjórar
                        </NavItem>
                        <NavItem eventKey={3} componentClass={Link} href="/list" to="/list">
                            Gjafalisti
                        </NavItem>
                        <NavItem eventKey={4} componentClass={Link} href="/menu" to="/menu">
                            Matseðill
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}