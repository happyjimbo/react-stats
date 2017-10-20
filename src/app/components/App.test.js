import React from 'react'
import {shallow} from 'enzyme'
import App from './App'
import StatsListGroupContainer from '../../stats/containers/StatsListGroupContainer'
import NavBarContainer from '../containers/NavBarContainer'

describe('App', () =>{

	it('contains the App className', () => {		
		const component = shallow(<App />)

		const app = component.find(div => div.hasClass('App'))
		expect(app).toBeTruthy()		
	})

	it ('contains TabButtonsContainer', () => {
		const component = shallow(<App Component={NavBarContainer} />)

		const bavBarContainer = <NavBarContainer />
		expect(component.contains(bavBarContainer)).toEqual(true)
	})

	it ('contains StatsListGroupContainer passed in by the view', () => {
		const component = shallow(<App Component={StatsListGroupContainer} />)

		const statsListGroupContainer = <StatsListGroupContainer />
		expect(component.contains(statsListGroupContainer)).toEqual(true)
	})
})
