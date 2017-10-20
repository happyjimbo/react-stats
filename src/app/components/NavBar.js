import React from 'react'
import PropTypes from 'prop-types'
import {Navbar, Nav, NavItem, FormGroup, FormControl, Button} from 'react-bootstrap'
import './NavBar.css'

const NavBar = ({ selectClick, indexClick, aboutClick }) => {

    let textInput

    return (
        <div className="NavBar">
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="javascript:void(null)" onClick={indexClick}>Stocks App</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Navbar.Form pullLeft>
                        <FormGroup onChange={e => textInput = e.target.value}>
                            <FormControl type="text" placeholder="stock" />
                        </FormGroup>
                        {' '}
                        <Button type="submit" onClick={e => selectClick(textInput)}>Search</Button>
                    </Navbar.Form>

                    <Nav pullRight>
                        <NavItem eventKey={1} onClick={aboutClick} id="about">About</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

Navbar.PropTypes = {
    selectClick: PropTypes.func.isRequired,
    indexClick: PropTypes.func.isRequired,
    aboutClick: PropTypes.func.isRequired
}

export default NavBar