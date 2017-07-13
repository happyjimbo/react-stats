import React, { Component } from 'react'
import Header from './Header'
import NavBarContainer from '../containers/NavBarContainer'
import StatsListGroupContainer from '../../stats/containers/StatsListGroupContainer'
import './App.css'

class App extends Component {
	render() {

       	const {display, view} = this.props

		return (
			<div className="App">
				<div className="center">
					<NavBarContainer />
				</div>
				<div className="center" id="panel">
					<StatsListGroupContainer />
				</div>
			</div>
			)	
		}

	componentDidMount() {
    	document.body.style.backgroundColor = "#eee"
	}
}

export default App