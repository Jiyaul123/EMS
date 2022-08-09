import React from 'react'
import { Button, Nav, Navbar, NavDropdown } from 'react-bootstrap'

const Topbar = () => {
    return (
        <>
            <Navbar bg="white" expand="lg" className="xrg-top-main  ">
                <Navbar.Brand className="xrg-fw-900 cursor-pointer text-brand-color mx-3 ">
                </Navbar.Brand>
                <Navbar.Brand className="xrg-fw-900 cursor-pointer text-brand-color">
                    EMS
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse
                    id="basic-navbar-nav"
                    className="d-flex justify-content-end"
                >
                    <Nav>
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown" align="end">
                            <NavDropdown.Item onClick={() => { }}>
                                <span className="fw-bold">Log Out</span>
                            </NavDropdown.Item>
                        </NavDropdown> */}
                        <span className="fw-bold me-4 mt-2" style={{ cursor: "pointer" }}>Admin Login</span>

                        <Button className="fw-bold me-3" variant="secondary">Log Out</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Topbar