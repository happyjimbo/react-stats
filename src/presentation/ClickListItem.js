import React, {PropTypes, Component} from 'react';
import {ListGroupItem} from 'react-bootstrap';

/*const ClickListItem = ( {linkText, click, key} ) => {

    console.log("key " + key);

    return (
        <ListGroupItem onClick={click}>{linkText}</ListGroupItem>
    );
}*/

class ClickListItem extends Component {

    render() {

        console.log("statName " + this.props.statName);

        return (
            <ListGroupItem onClick={this.props.click}>{this.props.linkText}</ListGroupItem>
        );
    }

    static propTypes = {
        click: PropTypes.func.isRequired,
        linkText: PropTypes.string.isRequired,
        click: PropTypes.func.isRequired
    }
}

// ClickListItem.PropTypes = {
//     linkText: PropTypes.string.isRequired,
//     click: PropTypes.func.isRequired
// }

export default ClickListItem;