import {connect} from 'react-redux';
import StatPanel from '../components/StatPanel';

const mapStateToProps = (state, props) => {

    const statName = props.statName;
    const display = props.displayDetails[statName] !== undefined ? props.displayDetails[statName] : false;
    const text = JSON.stringify(props.stats[statName]);

    return {
        display,
        text
    }
};

const StatPanelContainer = connect(mapStateToProps)(StatPanel);
export default StatPanelContainer;