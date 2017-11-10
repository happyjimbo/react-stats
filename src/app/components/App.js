import React, { Component } from 'react'
import NavBarContainer from '../containers/NavBarContainer'
import './App.css'

const App = ({Component}) => {
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

export default App