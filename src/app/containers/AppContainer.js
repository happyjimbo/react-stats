import {connect} from 'react-redux'
import App from '../components/App'
import {INDEX, ABOUT} from '../consts/AppConsts'
import AboutContainer from '../../about/containers/AboutContainer'
import StatsListGroupContainer from '../../stats/containers/StatsListGroupContainer'

const mapStateToProps = (state) => {

    const {appReducer} = state
    const {view} = appReducer

    return {
        Component: getComponent()[view]
    }
}

const getComponent = () => ({
    [INDEX]:StatsListGroupContainer,
    [ABOUT]:AboutContainer
})

const AppContainer = connect(mapStateToProps, null)(App)
export default AppContainer