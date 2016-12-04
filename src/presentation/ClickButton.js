import React, {PropTypes} from 'react';
import {Button} from 'react-bootstrap';

const ClickButton = ( {onClick, buttonText, display} ) => {

    if (!display) {
        return (<div></div>);
    }

    return (
        <Button bsStyle="primary" onClick={ e => onClick() }>{buttonText}</Button>
    );
}

ClickButton.PropTypes = {
    onClick: PropTypes.func.isRequired,
    buttonText : PropTypes.string.isRequired,
    display : PropTypes.bool.isRequired
}

export default ClickButton;