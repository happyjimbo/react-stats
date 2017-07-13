import {connect} from 'react-redux'
import NavBar from '../components/NavBar'
import {requestStat} from '../../stats/actions/StatsAction'
    
let input

const mapDispatchToProps = (dispatch) => ({
    handleChange : (change) => input = change,
    onClick : (key) => handleSelectedTab(dispatch)    
})

const handleSelectedTab = (dispatch) => {
    if (input != null) {
        dispatch(requestStat(input))
    }
}

const NavBarContainer = connect(null, mapDispatchToProps)(NavBar)
export default NavBarContainer