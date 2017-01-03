import React from 'react';
import {shallow} from 'enzyme';
import App from '../App';
import renderer from 'react-test-renderer';

describe('App', () =>{

	it('Contains the App className', () => {		
		const component = shallow(<App />);
		expect(component.find('div').hasClass('App')).toBe(true);
	});
	
});
