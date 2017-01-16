import React, { Component } from 'react';
import './css/App.css';
import DialogPopUpContainer from './containers/DialogPopUpContainer';
import StatsFormContainer from './containers/StatsFormContainer';
import StatsListGroupContainer from './containers/StatsListGroupContainer';

class App extends Component {
	render() {
		return (
			<div className="App">
				<StatsFormContainer />
				<StatsListGroupContainer />			
				<DialogPopUpContainer />      
			</div>
		);
	}
}

export default App;