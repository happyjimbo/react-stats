import {connect} from 'react-redux'
import LineGraph from '../../shared/components/LineGraph'
import StatLineGraphSelector from '../../stats/selectors/StatLineGraphSelector'

const mapMakeToProps = () => {
    
    const selector = StatLineGraphSelector()
    const mapStateToProps = (state, props) => selector(state, props) 
    return mapStateToProps
}

const LineGraphContainer = connect(mapMakeToProps)(LineGraph)
export default LineGraphContainer