import React, {PropTypes, Component} from 'react';
import {Button} from 'react-bootstrap';

// const ClickButton = ( {onClick, buttonText, display} ) => {

//     if (!display) {
//         return (<div></div>);
//     }

//     return (
//         <Button bsStyle="primary" onClick={ e => onClick() }>{buttonText}</Button>
//     );
// }

// ClickButton.PropTypes = {
//     onClick: PropTypes.func.isRequired,
//     buttonText : PropTypes.string.isRequired,
//     display : PropTypes.bool.isRequired
// }

// Using a class instead of functions.
// I much prefer how we have to pass in the values in the 
// function based way instead of relying them to be on the props.
class ClickButton extends Component {

    render() {

        if (!this.props.display) {
            return (<div></div>);
        }

        return (
            <Button bsStyle="primary" onClick={ e => this.props.onClick() }>{this.props.buttonText}</Button>
        );
    }

    static propTypes = {
        onClick: PropTypes.func.isRequired,
        buttonText : PropTypes.string.isRequired,
        display : PropTypes.bool.isRequired
    }
}


export default ClickButton;