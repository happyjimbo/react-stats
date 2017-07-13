import {connect} from 'react-redux'
import NavBar from '../components/NavBar'
import * as AppRouter from '../../app/router/AppRouter'

const mapStateToProps = (state) => 
{
    const defaultKey = AppRouter.pathName(state.routing)
    return {  
        defaultKey
    }
}
    
const mapDispatchToProps = (dispatch) => ({
    onSelect : (key) => handleSelectedTab(key, dispatch)
})

const handleSelectedTab = (key, dispatch) => {
    
    AppRouter.updateUrl(key)

    const route = AppRouter.route(key)    
    dispatch(route)
}

const NavBarContainer = connect(mapStateToProps, mapDispatchToProps)(NavBar)
export default NavBarContainer