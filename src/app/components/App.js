import React, { Component } from 'react'
import NavBarContainer from '../containers/NavBarContainer'
import StatsListGroupContainer from '../../stats/containers/StatsListGroupContainer'
import './App.css'

class App extends Component {
	render() {

		return (
			<div className="App">
				<div className="center">
					<NavBarContainer />				
					<div id="panel">
						<StatsListGroupContainer />
					</div>
				</div>
			</div>
			)	
		}

	componentDidMount() {
    	document.body.style.backgroundColor = "#eee"
	}
}

export default App