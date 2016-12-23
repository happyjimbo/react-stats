import React, {PropTypes} from 'react';
import {FormGroup, ControlLabel, FormControl, HelpBlock, Navbar, Button} from 'react-bootstrap';

const StateForm = ({getValidationState, onClick, defaultValue, handleChange, formValue, controlLabel, helpLabel}) => {
    return (
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    {controlLabel}
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

export default StateForm;
