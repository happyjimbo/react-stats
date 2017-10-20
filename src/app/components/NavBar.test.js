import React from 'react'
import {shallow} from 'enzyme'
import renderer from 'react-test-renderer'
import Navbar from './Navbar'

describe('NavBar', () =>{

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
        const selectClick = (textInput) => { clicked = true; }

        const props = { selectClick }
        const component = shallow(<Navbar {...props} />)


        expect(clicked).toBe(false)

        const button = component.find('Button')
        button.simulate('click')

        expect(clicked).toBe(true)
    })
})
