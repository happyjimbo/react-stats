import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {shallow} from 'enzyme';
import * as actions from '../../actions/StatsAction';
import renderer from 'react-test-renderer';
import nock from 'nock';
import * as types from '../../types/StatsTypes';

const middlewares = [ thunk ];
const mockstore = configureMockStore(middlewares);


describe('StatsAction', () => {

    const stat = 'RBS.L';
    const url = 'https://query.yahooapis.com';    

    afterEach(() => {
        nock.cleanAll();
    });

    it("fetchStat mock valid data and trigger RECEIVE_STAT event", () => {

        const store = mockstore({});

        const testObject = {
            query: {
                results: {
                    quote: {
                        Name: "test"
                    }                    
                }
            }
        };        

        nock(url)
        .filteringPath(path => '/')
        .get('/')
        .reply(200, testObject);

        const expectedActions = [{ 
            type: types.RECEIVE_STAT, 
            stat,
            data: testObject 
        }];
        
        return store.dispatch(actions.fetchStat(stat))
        .then(() => { 
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it("fetchStat mock invalid data and trigger RECEIVE_STAT_FAIL event", () => {
        
        const store = mockstore({});
        const testObject = { fail: "please" };        

        nock(url)
        .filteringPath(path => '/')
        .get('/')
        .reply(200, testObject);

        const expectedActions = [{ 
            type: types.RECEIVE_STAT_FAIL, 
            stat,
            message: actions.failMessage
        }];  

        return store.dispatch(actions.fetchStat(stat))
        .then(() => { 
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

});