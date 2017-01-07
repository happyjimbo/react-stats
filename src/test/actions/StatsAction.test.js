import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {shallow} from 'enzyme';
import {getStatUrl, fetchStat} from '../../actions/StatsAction';
import renderer from 'react-test-renderer';
import nock from 'nock';
import {RECEIVE_STAT} from '../../consts/StatsConsts';

const middlewares = [ thunk ];
const mockstore = configureMockStore(middlewares);


describe('StatsAction', () => {

    afterEach(() => {
        nock.cleanAll();
    });

    it("test", () => {

        const testObject = {
            query: {
                results: {
                    quote: {
                        Name: "test"
                    }                    
                }
            }
        };

        const stat = 'RBS.L';
        const url = 'https://query.yahooapis.com';

        nock(url)
        .filteringPath(path => '/')
        .get('/')
        .reply(200, testObject);

        const expectedActions = [{ 
            type: RECEIVE_STAT, 
            stat,
            data: testObject 
        }];

        const store = mockstore({});

        return store.dispatch(fetchStat(stat))
        .then(() => { 
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

});