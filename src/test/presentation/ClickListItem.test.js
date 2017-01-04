import React from 'react';
import {shallow} from 'enzyme';
import ClickListItem from '../../presentation/ClickListItem';
import renderer from 'react-test-renderer';

describe('ClickListItem', () => {

    const statName = "MyStatName";
    const info = "some info";
    const click = () => {};

    function setUp(extraProps = undefined) {

        const defaultProps = {
            statName,
            info,
            click
        };

        const props = Object.assign({}, defaultProps, extraProps);
        const component = shallow(<ClickListItem {...props} />);

        return {
            props,
            component
        }
    }

    it('compares component to snapshot', () => {
        
        const style = true;

        const component = renderer.create(
            <ClickListItem statName={statName} info={info} click={click} style={style} />
        );

        let clickListItem = component.toJSON();
        expect(clickListItem).toMatchSnapshot();
    });

    it ('runs click callback when clicked, setting value to true', () => {

        let clicked = false;
        const click = () => { clicked = true; };

        const props = { click };
        const { component } = setUp(props);
        
        expect(clicked).toBe(false);

        component.simulate('click');
        
        expect(clicked).toBe(true);
    });

    it ('sets byStyle to success state', () => {

        const props = { success: true };
        const { component } = setUp(props);

        const componentProps = component.props();
        expect(componentProps.bsStyle).toBe("success");
    });

    it ('sets byStyle to danger state', () => {

        const props = { success: false };
        const { component } = setUp(props);

        const componentProps = component.props();
        expect(componentProps.bsStyle).toBe("danger");
    });

    it ('displays statName and info', () => {

        const { component } = setUp();

        const containsStatName = component.children().contains(statName);
        expect(containsStatName).toBe(true);

        const containsInfo = component.children().contains(info);
        expect(containsInfo).toBe(true);
    });
    
});