import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import StatListItemContainer from './StatListItemContainer';
import StatListItem from '../components/StatListItem';

const mockstore = configureMockStore();

let Container;
let StatListItemComponent;

describe('StatListItemContainer', () => {

    beforeEach(() => {
        const store = mockstore({});

		const wrapper = shallow(
			<Provider store={store}>
				<StatListItemContainer />
			</Provider>
		);

		Container = wrapper.find(StatListItemContainer);
		StatListItemComponent = Container.find(StatListItem);
	});

	it('StatListItemContainer is connected to StatListItem', () => {
		 expect(Container).toBeTruthy();
		 expect(StatListItemComponent).toBeTruthy();
	})
});