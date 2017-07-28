import {connect} from 'react-redux';
import {displayDetailedStats, removeStat} from '../actions/StatsAction';
import StatListItem from '../components/StatListItem';
import makeGetStatsListItemData from '../selectors/StatListItemSelector';

const mapMakeToProps = () => {
    const getStatsListItemData = makeGetStatsListItemData()
    const mapStateToProps = (state, props) => getStatsListItemData(state, props)
    return mapStateToProps
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectClick: stat => dispatch(displayDetailedStats(stat)),
        removeClick: (stat, e) => {
            dispatch(removeStat(stat))
            e.stopPropagation()
        }
    }
}

const LineGraphContainer = connect(mapMakeToProps, mapDispatchToProps)(StatListItem);
export default LineGraphContainer;