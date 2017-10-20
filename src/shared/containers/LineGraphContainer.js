import {connect} from 'react-redux'
import LineGraph from '../../shared/components/LineGraph'
import makeStatLineGraphSelector from '../../stats/selectors/StatLineGraphSelector'

const mapMakeToProps = () => {
    
    const selector = makeStatLineGraphSelector()
    const mapStateToProps = (state, props) => selector(state, props) 
    return mapStateToProps
}

const LineGraphContainer = connect(mapMakeToProps)(LineGraph)
export default LineGraphContainer