import React from 'react'
import {shallow} from 'enzyme'
import StatListItem from './StatListItem'
import renderer from 'react-test-renderer'

describe('StatListItem', () => {

    const defaultProps = {
        statName: "MyStatName",
        info: "some info",
        selectClick: () => {},
        todayStat: "this is today",
        yesterdayStat: "yesterday, all my troubles seemed so far away",
        yesterdayLastWeekStat: "last week",
        weekAverageStat: "week average"
    }

    const setUp = (extraProps = undefined) => {

        const props = Object.assign({}, defaultProps, extraProps)
        const component = shallow(<StatListItem {...props} />)

        return {
            props,
            component
        }
    }

    it('compares component to snapshot', () => {
        
        const component = renderer.create(
            <StatListItem {...defaultProps} />
        )

        const statListItem = component.toJSON()
        expect(statListItem).toMatchSnapshot()
    })

    it ('runs callback when listGroupItem clicked, setting value to true', () => {

        let clicked = false
        const selectClick = () => { clicked = true; }

        const props = { selectClick }
        const { component } = setUp(props)
        
        expect(clicked).toBe(false)

        const listGroupItem = component.find('ListGroupItem')
        listGroupItem.simulate('click')
        
        expect(clicked).toBe(true)
    })

    it ('displays stats', () => {

        const { component, props } = setUp()

        const today = component.children().contains(props.todayStat)
        expect(today).toBe(true)

        const yesterday = component.children().contains(props.yesterdayStat)
        expect(yesterday).toBe(true)

        const lastweek = component.children().contains(props.yesterdayLastWeekStat)
        expect(lastweek).toBe(true)

        const weekAverage = component.children().contains(props.weekAverageStat)
        expect(weekAverage).toBe(true)
    })
    
})