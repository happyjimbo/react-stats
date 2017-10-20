import {connect} from 'react-redux'
import NavBar from '../components/NavBar'
import {requestStat} from '../../stats/actions/StatsAction'
import {ABOUT, INDEX} from "../consts/AppConsts";
import {changeRoute} from "../actions/AppAction";
    
const mapDispatchToProps = dispatch => ({
    selectClick : (textInput) => handleSelectedTab(dispatch, textInput),
    indexClick : () => dispatch(changeRoute(INDEX)),
    aboutClick : () => dispatch(changeRoute(ABOUT))
})

const handleSelectedTab = (dispatch, textInput) => {
    if (textInput != null && textInput !== "") {
        dispatch(requestStat(textInput))
    }
}

const NavBarContainer = connect(null, mapDispatchToProps)(NavBar)
export default NavBarContainer