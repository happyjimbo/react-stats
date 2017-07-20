import {connect} from 'react-redux'
import NavBar from '../components/NavBar'
import {requestStat} from '../../stats/actions/StatsAction'

let textInput
    
const mapDispatchToProps = (dispatch) => ({
    handleChange: (e) => textInput = e.target.value,
    onClick : (e) => handleSelectedTab(dispatch)    
})

const handleSelectedTab = (dispatch) => {
    if (textInput != null && textInput != "") {
        dispatch(requestStat(textInput))
    }
}

const NavBarContainer = connect(null, mapDispatchToProps)(NavBar)
export default NavBarContainer