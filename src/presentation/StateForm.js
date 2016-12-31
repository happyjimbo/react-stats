import React, {PropTypes} from 'react';
import {FormGroup, FormControl, Navbar, Button} from 'react-bootstrap';

const StateForm = ({onClick, handleChange, searchText, helpLabel}) => {
    return (
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    {searchText}
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Navbar.Form pullLeft>
                    <FormGroup>
                        <FormControl 
                        type="text" 
                        placeholder="Search"
                        onChange={e => handleChange(e.target.value)}/>
                    </FormGroup>
                    {' '}
                    <Button type="submit" onClick={ onClick }>Submit</Button>
                     <Navbar.Text pullRight>
                        {helpLabel}
                    </Navbar.Text>
                </Navbar.Form>
            </Navbar.Collapse>
        </Navbar>
    );
}

StateForm.PropTypes = {
    onClick: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    controlLabel: PropTypes.string.isRequired,
    helpLabel: PropTypes.string.isRequired
};

export default StateForm;
