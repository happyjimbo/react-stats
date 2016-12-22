import {connect} from 'react-redux';
import ListItemGroup from '../presentation/ListItemGroup';
import StatListItemContainer from './StatListItemContainer';

const mapStateToProps = (state) => {
    return {
        count: 10,
        StatListItemContainer:StatListItemContainer
    }
}


const StatsListGroupContainer = connect(mapStateToProps)(ListItemGroup);
export default StatsListGroupContainer;