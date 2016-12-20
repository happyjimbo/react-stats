import React, {PropTypes} from 'react';
import {Label} from 'react-bootstrap';

const StateLabel = ({text, style}) => {
    return (
        <Label bsStyle={style}>{text}</Label>
    );
}

StateLabel.PropTypes = {
    text: PropTypes.string.isRequired
}

export default StateLabel;