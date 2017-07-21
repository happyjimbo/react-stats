import {connect} from 'react-redux'
import NavBar from '../components/NavBar'
import {requestStat} from '../../stats/actions/StatsAction'
    
const mapDispatchToProps = (dispatch) => ({
    onClick : (textInput) => handleSelectedTab(dispatch, textInput)    
})

const handleSelectedTab = (dispatch, textInput) => {
    if (textInput != null && textInput != "") {
        dispatch(requestStat(textInput))
    }
}

const NavBarContainer = connect(null, mapDispatchToProps)(NavBar)
export default NavBarContainer