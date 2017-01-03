import React from 'react';
import {shallow} from 'enzyme';
import ClickListItem from '../../presentation/ClickListItem';
import renderer from 'react-test-renderer';

describe('ClickListItem', () => {

    it('Compare to matched snapshot', () => {
        
        const statName = "MyStatName";
        const info = "this is some info";
        const click = () => {};
        const style = true;

        const component = renderer.create(
            <ClickListItem statName={statName} info={info} click={click} style={style} />
        );

        let clickListItem = component.toJSON();
        expect(clickListItem).toMatchSnapshot();
    });

    it ('click runs callback', () => {

        let clicked = false;
        const click = () => { clicked = true; };

        const component = shallow(
            <ClickListItem click={click} />
        );

        component.simulate('click');
        expect(clicked).toBe(true);
    });

    // it ('props should all work', () => {

    //     const statName = "MyStatName";
    //     const info = "this is some info";        
    //     const style = true;

    //     let clicked = false;
    //     const click = () => { clicked = true; };

    //     const component = shallow(
    //         <ClickListItem statName={statName} info={info} click={click} style={style} />
    //     );        
    //     //expect(component.find('<b>')).toBe(statName);
    // });


});