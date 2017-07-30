import React from 'react'
import PropTypes from 'prop-types'
import {Navbar, FormGroup, FormControl, Button} from 'react-bootstrap'
import './NavBar.css'

const NavBar = ({ onClick }) => {

    let textInput

    return (
        <div className="NavBar">
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        Stocks App
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Navbar.Form pullLeft>
                        <FormGroup onChange={e => textInput = e.target.value}>
                            <FormControl type="text" placeholder="stock" />
                        </FormGroup>
                        {' '}
                        <Button type="submit" onClick={e => onClick(textInput)}>Search</Button>
                    </Navbar.Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

Navbar.PropTypes = {
    onClick: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired
}

export default NavBar