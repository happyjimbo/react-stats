import React, {PropTypes, Component} from 'react';
import {ListGroupItem} from 'react-bootstrap';

class ClickListItem extends Component {

    render() {

       let statName = this.props.statName;
       let info = this.props.info;
       let click = this.props.click;

       let style = this.props.success ? "success" : "danger";

        return (
            <ListGroupItem onClick={e => click(statName)} bsStyle={style}>
                <b>{statName}</b> : {info}
            </ListGroupItem>
        ); 
    }

    static propTypes = {
        statName: PropTypes.string.isRequired,
        info: PropTypes.string.isRequired,
        click: PropTypes.func.isRequired
    }
}

export default ClickListItem;