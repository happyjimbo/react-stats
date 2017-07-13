import React, {PropTypes} from 'react'
import {Navbar, FormGroup, FormControl, Button} from 'react-bootstrap'
import './NavBar.css'

const NavBar = ({onSelect, 
                    defaultKey, 
                    rolling,
                    revenue, 
                    dau, 
                    arpu, 
                    newUsers, 
                    concurrent, 
                    user, 
                    errors,
                    scheduleMonkey,
                    scheduleCat,
                    scheduleDog}) => {

    const style = {
        backgroundColor: "#2F69C6",
        borderColor: "#2F69C6",
        color: "white"
    }

    const white = {
        color: "white"
    }

    const nav = () => (
    // <Navbar style={style}>
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
                <FormGroup>
                    <FormControl type="text" placeholder="stock" />
                </FormGroup>
                {' '}
                <Button type="submit">Search</Button>
            </Navbar.Form>
        </Navbar.Collapse>
    </Navbar>
    </div>
    )

    return nav()    
}

// TabButtons.PropTypes = {
//     onSelect: PropTypes.func.isRequired,
//     defaultKey: PropTypes.string.isRequired,    
//     rolling: PropTypes.string.isRequired,    
//     revenue: PropTypes.string.isRequired,    
//     dau: PropTypes.string.isRequired,
//     arpu: PropTypes.string.isRequired,    
//     newUsers: PropTypes.string.isRequired,
//     concurrent: PropTypes.string.isRequired,
//     user: PropTypes.string.isRequired,
//     errors: PropTypes.string.isRequired
// }  

export default NavBar