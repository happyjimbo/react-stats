import React, { Component } from 'react';
import {ButtonToolbar} from 'react-bootstrap';
import './css/App.css';
import DialogButtonContainer from './container/DialogButtonContainer';
import DialogPopUpContainer from './container/DialogPopUpContainer';
import StatsLabelContainer from './container/StatsLabelContainer';
import StatsFormContainer from './container/StatsFormContainer';
import StatsListGroupContainer from './container/StatsListGroupContainer';

class App extends Component {
	render() {

		var align = { textAlign: 'right' }

		return (
			<div className="App">
				<StatsFormContainer />
				<StatsListGroupContainer />			
				<DialogButtonContainer />
				<DialogPopUpContainer />      
				<StatsLabelContainer />
			</div>
		);
	}
}

export default App;