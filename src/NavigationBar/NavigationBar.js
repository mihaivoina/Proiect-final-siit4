import React, { Component } from 'react';

import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import NavLink from 'react-bootstrap/NavLink';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from 'react-router-dom';

import logo from'./iac.jpg';
import {Login, SessionContext} from '../Login';



class  NavigationBar extends Component {
    static contextType = SessionContext;
    state = {
        showModal: false,
    };

    handleShowModal = () => {
        this.setState({showModal: true});
    };

    focusInput = () => document.querySelector('#username').focus();
    handleCloseModal = () => this.setState({showModal: false});
    handleLogout = () => {
        this.context.setUser(null);
        localStorage.removeItem('Visit-Transilvania-user');
    }
    // onEntered={this.focusInput}
    
    render() {
        console.log("User: ", this.context.user);
        
        return(
            <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand as={Link} to="/"><img src={logo} alt="" width="48" height="48" className="d-inline-block align-top imgSigla" />
                    <div className="d-inline-block align-top sigla">
                        <div>Fortified Churches</div>
                        <div>in Transylvania</div>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/visit">Visit</Nav.Link>
                        <NavDropdown title="Attractions" id="collasible-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/fortified_churches">Fortified Churches</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/churches_with_fortified_enclosure_walls">Churches with fortified enclosure walls</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/fortress_Churches">Fortress-Churches</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/tips_for_trips">Tips for trips</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to="/wish_to_visit">Wish to visit</Nav.Link>
                        <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                    </Nav>
                    <Nav>
                        { (this.context.user)  ? 
                                <>
                                <Navbar.Text>{  this.context.user.firstName  }</Navbar.Text>
                                <NavLink onClick={this.handleLogout}>Logout</NavLink>
                                </>
                            : 
                            <NavLink onClick={this.handleShowModal}>Login</NavLink>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            {/* {onEntered={this.focusInput}} */}
            <Modal show={this.state.showModal}  onHide={this.handleCloseModal}>
                <Modal.Header closeButton>
                <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Login save={false} handleModalSubmit={this.handleCloseModal} />
                </Modal.Body>
            </Modal>
            Logged as: { this.context.user ? this.context.user.firstName : '' }
          </>
        );
    }
}

export default NavigationBar;
   