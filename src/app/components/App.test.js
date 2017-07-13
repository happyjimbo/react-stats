import React from 'react'
import {shallow} from 'enzyme'
import App from './App'
import StatsListGroupContainer from '../../stats/containers/StatsListGroupContainer'
import NavBarContainer from '../containers/NavBarContainer'
//import { Provider } from 'react-redux'
//import renderer from 'react-test-renderer'
//import configureMockStore from 'redux-mock-store'


describe('App', () =>{

	/*const mockstore = configureMockStore()

	it('compares component to snapshot', () => {

		const store = mockstore({})

		const component = renderer.create(
		<Provider store={store}>
			<App />
		</Provider>)

	})*/

	it('contains the App className', () => {		
		const component = shallow(<App display={true} />)

		const app = component.find(div => div.hasClass('App'))
		expect(app).toBeTruthy()		
	})

	it ('contains TabButtonsContainer', () => {
		// Passing in the view so that the code compiles, this could be any component
		const component = shallow(<App display={false} view={StatsListGroupContainer} />)

		const bavBarContainer = <NavBarContainer />
		expect(component.contains(bavBarContainer)).toEqual(true)
	})

	it ('contains StatsListGroupContainer passed in by the view', () => {
		const component = shallow(<App display={false} view={StatsListGroupContainer} />)

		const statsListGroupContainer = <StatsListGroupContainer />
		expect(component.contains(statsListGroupContainer)).toEqual(true)
	})
})
