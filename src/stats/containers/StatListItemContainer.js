import {connect} from 'react-redux';
import {displayDetailedStats} from '../actions/StatsAction';
import StatListItem from '../components/StatListItem';
import makeGetStatsListItemData from '../selectors/StatListItemSelector';
import * as StatTypes from '../consts/StatTypes'

const mapMakeToProps = () => {
    const getStatsListItemData = makeGetStatsListItemData()
    const mapStateToProps = (state, props) => getStatsListItemData(state, props)
    return mapStateToProps
}

const mapDispatchToProps = (dispatch) => {
    return {
        click: stat => dispatch(displayDetailedStats(stat))
    }
}

const LineGraphContainer = connect(mapMakeToProps, mapDispatchToProps)(StatListItem);
export default LineGraphContainer;