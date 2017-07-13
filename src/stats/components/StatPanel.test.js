import React from 'react'
import {shallow} from 'enzyme'
import StatPanel from './StatPanel'
import renderer from 'react-test-renderer'
import LineGraphContainer from '../../shared/containers/LineGraphContainer';

describe('StatPanel', () => {

    const statName = "MyStatName"
    const panelStats = []

    const setUp = (extraProps = undefined) => {

        const defaultProps = {
            statName,
            panelStats,
            LineGraphContainer
        }

        const props = Object.assign({}, defaultProps, extraProps)
        const component = shallow(<StatPanel {...props} />)

        return {
            props,
            component
        }
    }

    it ('sets expanded to true', () => {

        const props = { display: true }
        const { component } = setUp(props)

        const {expanded} = component.find('Panel').props()
        expect(expanded).toBe(true)
    })

    it ('sets expanded to false', () => {

        const props = { display: false }
        const { component } = setUp(props)

        const {expanded} = component.find('Panel').props()
        expect(expanded).toBe(false)
    })

    it ('checks that LineGraphContainer is there', () => {
        
        const props = { display: true }
        const { component } = setUp(props)

        const containsStatName = component.find('LineGraphContainer')
        expect(containsStatName).toBeDefined()
    })
})