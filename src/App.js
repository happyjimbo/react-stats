import React, { Component } from 'react';
import './css/App.css';
import DialogPopUpContainer from './container/DialogPopUpContainer';
import StatsFormContainer from './container/StatsFormContainer';
import StatsListGroupContainer from './container/StatsListGroupContainer';

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