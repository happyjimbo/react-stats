import React, {PropTypes, Component} from 'react';
import {ListGroupItem} from 'react-bootstrap';

class ClickListItem extends Component {

    render() {

       let statName = this.props.statName;
       let info = this.props.info;
       let click = this.props.click;
       let StatsLabelContainer = this.props.StatsLabelContainer;

       let style = this.props.success ? "success" : "danger";

        return (
            <ListGroupItem onClick={click} bsStyle={style}>
                <b>{statName}</b> : {info}
            </ListGroupItem>
        ); 
    }

    static propTypes = {
        click: PropTypes.func.isRequired
    }
}

export default ClickListItem;