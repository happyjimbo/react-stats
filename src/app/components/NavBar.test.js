import React from 'react'
import {shallow} from 'enzyme'
import renderer from 'react-test-renderer'
import Navbar from './Navbar'
import StatsListGroupContainer from '../../stats/containers/StatsListGroupContainer'
import NavBarContainer from '../containers/NavBarContainer'


describe('App', () =>{

    it('compares component to snapshot', () => {        
        const component = renderer.create(<Navbar />)
        const navBar = component.toJSON()
        expect(navBar).toMatchSnapshot()
    })

	it('contains the Navbar className', () => {		
		const component = shallow(<Navbar />)

		const app = component.find(div => div.hasClass('NavBar'))
		expect(app).toBeTruthy()		
    })

    it ('run callback when Button clicked, setting value to true', () => {

        let clicked = false
        const onClick = () => { clicked = true; }

        const props = { onClick }
        const component = shallow(<Navbar {...props} />)
        
        expect(clicked).toBe(false)

        const button = component.find('Button')
        button.simulate('click')
        
        expect(clicked).toBe(true)
    })

    it ('run callback when FormGroup changed, setting value to true', () => {

        let change = false
        const handleChange = () => { change = true; }

        const props = { handleChange }
        const component = shallow(<Navbar {...props} />)
        
        expect(change).toBe(false)

        const formGroup = component.find('FormGroup')
        formGroup.simulate('change')
        
        expect(change).toBe(true)
    })
})
