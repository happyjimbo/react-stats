import * as FinanceService from './FinanceStatsService'
import * as StatTypes from '../consts/StatTypes'
import nock from 'nock';

describe('FinanceService', () => {

    const game = 'monkey'
    const statType = StatTypes.DAU
    const url = 'http://localhost:4000'
    
    afterEach(() => {
        nock.cleanAll();
    });    

    it ('fetchStatData returns promise data', () => {

        const mockData = [{
            name: "testyface"
        }]

        const statsData = {
            game,
            statType
        }

        nock(url)
        .filteringPath(path => '/')
        .get('/')
        .reply(200, mockData);

        return FinanceService.fetchStatData(statsData)
        .then(data => { 
            expect(data).toEqual(mockData);
        });

    })
})

// Keep below to test the service

   /* const game = 'monkey';
    const stat = StatTypes.REVENUE;
    const url = 'https://dashboard.swrve.com';

    const gameToken = '123';
    const personalToken = '456';

    const statData = {
        game,
        gameToken,
        personalToken,
        statType:stat,
        count:9
    };

    afterEach(() => {
        nock.cleanAll();
    });

    it("fetchTokens mock valid data and trigger RECEIVE_STAT event", () => {

        const store = mockstore({});

        const testObject = [{
            name: "testyface"
        }];  

        nock(url)
        .filteringPath(path => '/')
        .get('/')
        .reply(200, testObject);

        const expectedActions = [{ 
            type: types.RECEIVE_STAT, 
            stat:game,
            statType:stat,
            data: testObject 
        }];

        const data = {
            game: {
                [game]: gameToken
            },
            personal: {
                token: personalToken
            }
        };
        
        // Either need to use thunk / promises or something else..
        //store.dispatch(actions.fetchTokens(stat, data));
         return store.dispatch(actions.fetchTokens())
        .then(() => { 
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it("fetchStat mock valid data and trigger RECEIVE_STAT event", () => {

        const store = mockstore({});

        const testObject = [{
            name: "testyface"
        }];  

        nock(url)
        .filteringPath(path => '/')
        .get('/')
        .reply(200, testObject);

        const expectedActions = [{ 
            type: types.RECEIVE_STAT, 
            stat:game,
            statType:stat,
            data: testObject 
        }];
        
        return store.dispatch(actions.fetchStat(statData))
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
            stat:game,
            statType:stat,
            message: actions.failMessage
        }];  

        return store.dispatch(actions.fetchStat(statData))
        .then(() => { 
            expect(store.getActions()).toEqual(expectedActions);
        });
    });*/
