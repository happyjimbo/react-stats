import React, {PropTypes} from 'react'
import {Navbar, FormGroup, FormControl, Button} from 'react-bootstrap'
import './NavBar.css'

const NavBar = ({ onClick, handleChange }) => {

    const style = {
        backgroundColor: "#2F69C6",
        borderColor: "#2F69C6",
        color: "white"
    }

    const white = {
        color: "white"
    }

    const nav = () => (
    <div className="NavBar">
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand style={white}>
                    Stocks App
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Navbar.Form pullLeft>
                    <FormGroup onChange={e => handleChange(e.target.value)}>
                        <FormControl type="text" placeholder="stock" />
                    </FormGroup>
                    {' '}
                    <Button type="submit" onClick={e => onClick(e)}>Search</Button>
                </Navbar.Form>
            </Navbar.Collapse>
        </Navbar>
    </div>
    )

    return nav()    
}

export default NavBar