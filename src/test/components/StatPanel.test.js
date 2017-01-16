import React from 'react';
import {shallow} from 'enzyme';
import StatPanel from '../../components/StatPanel';
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
        
        const component = renderer.create(
            <StatPanel text="hello world" display={true} />
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
        
        const props = { display: true };
        const { component } = setUp(props);

        const containsStatName = component.find('Panel').children().contains(text);
        expect(containsStatName).toBe(true);
    });
});