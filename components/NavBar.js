/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import {
  Navbar, //
  Container,
  Nav,
  Button,
} from 'react-bootstrap';
import { signOut } from '../utils/auth';

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link passHref href="/">
          <Navbar.Brand>CHANGE ME</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
            <Link passHref href="/">
              <Nav.Link>User Form</Nav.Link>
            </Link>
            <Link passHref href="/Post/post">
              <Nav.Link>Posts</Nav.Link>
            </Link>
            <Link passHref href="/createTag">
              <Nav.Link>Create Tag</Nav.Link>
            </Link>
            <Link passHref href="/viewusers">
              <Nav.Link>View Users</Nav.Link>
            </Link>

            <Link passHref href="/userDetails">
              <Nav.Link>Bio</Nav.Link>
            </Link>

            <Link passHref href="/manageuser">
              <Nav.Link>Manage User</Nav.Link>

            </Link>
            <Button variant="danger" onClick={signOut}>
              Sign Out
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
