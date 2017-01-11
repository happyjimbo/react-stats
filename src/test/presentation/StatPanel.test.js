import React from 'react';
import {shallow} from 'enzyme';
import StatPanel from '../../presentation/StatPanel';
import renderer from 'react-test-renderer';

describe('StatPanel', () => {

    const statName = "MyStatName";
    const text = "some text";

    function setUp(extraProps = undefined) {

        const defaultProps = {
            statName,
            text,
        };

        const props = Object.assign({}, defaultProps, extraProps);
        const component = shallow(<StatPanel {...props} />);

        return {
            props,
            component
        }
    }

    it('compares component to snapshot', () => {
        
        const displayDetails = {
            [statName]: false
        }

        const component = renderer.create(
            <StatPanel statName={statName} displayDetails={displayDetails} />
        );

        let statPanel = component.toJSON();
        expect(statPanel).toMatchSnapshot();
    });

    it ('sets expanded to true', () => {

        const props = { display: true };
        const { component } = setUp(props);

        const componentProps = component.find('Panel').props();
        expect(componentProps.expanded).toBe(true);
    });

    it ('sets expanded to false', () => {

        const props = { display: false };
        const { component } = setUp(props);

        const componentProps = component.find('Panel').props();
        expect(componentProps.expanded).toBe(false);
    });

    it ('displays text', () => {

        const { component } = setUp();

        const containsStatName = component.children().contains(text);
        expect(containsStatName).toBe(true);
    });
});