import React, { Component } from 'react'
import NavBarContainer from '../containers/NavBarContainer'
import './App.css'

class App extends Component {

	render() {

		const {Component} = this.props

		return (
			<div className="App">
				<div className="center">
					<NavBarContainer />				
					<div id="panel">
						<Component />
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