import React, {Component} from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import{NavLink} from 'react-router-dom';

class Header extends Component{

    constructor(props){
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
    }

    toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }
    toggleModal() {
    this.setState({
        isModalOpen: !this.state.isModalOpen
    });
    }
    handleLogin(event) {
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();

    }


    render(){
        return(
            <React.Fragment>
                {/* this is the login modal */}

                <Navbar dark expand="md">
                    <div className="container">
                    <NavbarToggler onClick={this.toggleNav}/>
                    <NavbarBrand className="mr-auto" href="/">
                        <img src="../assets/images/logo.png" height ="30" width="41"
                        alt ="Vidly Movie Rental"/>
                    </NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home">
                                    <span>Home</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/genre">
                                    <span >Genre</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/movie">
                                    <span >Movie</span>
                                </NavLink>    
                            </NavItem>
                        </Nav>

                    </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;