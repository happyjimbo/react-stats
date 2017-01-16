import {statReceivedReducer, initalState} from '../../reducers/StatsReducers';
import * as types from '../../types/StatsTypes';

describe("StatsReducers", () => {

    const price = "123";
    const data = {
        query: {
            results: {
                quote: {
                    LastTradePriceOnly:price
                }
            }
        }
    }

    it("should return inital state", () => {
        const reducer = statReceivedReducer(undefined, {});
        expect(reducer).toEqual(initalState);
    });

    it ("should handle DISPLAY_DETAILED_STAT", () => {

        const stat = "RBS.L";

        const action = {
            type: types.DISPLAY_DETAILED_STAT,
            stat
        };

        const reducer = statReceivedReducer(initalState, action);

        const response = Object.assign({}, initalState, {
            displayDetailedStat: {
                [stat]: true
            }
        });

        expect(reducer).toEqual(response);
    });

    it("should handle RECEIVE_STAT one stat", () => {

        const stat = "RBS.L";

        const action = {
            type: types.RECEIVE_STAT,
            stat,
            data
        };

        const state = {};
        const reducer = statReceivedReducer(state, action);
        
        const response =  {         
            stats: {
                [stat]: {
                    LastTradePriceOnly: price
                }
            },
            statsOrder: [stat],
            prices: {
                [stat]: price
            },
            error: undefined
        }

        expect(reducer).toEqual(response);
    });

    it("should handle RECEIVE_STAT two stats", () => {

        const oldStat = "LLOY.L";
        const newStat = "RBS.L";
                
        const action = {
            type: types.RECEIVE_STAT,
            stat: newStat,
            data
        };

        const state = { 
            stats: {
                [oldStat]: {
                    LastTradePriceOnly: price
                }
            },
            statsOrder: [oldStat],
            prices: {
                [oldStat]: price
            },
            error: undefined
        };

        const reducer = statReceivedReducer(state, action);
        
        const response =  {         
            stats: {
                [oldStat]: {
                    LastTradePriceOnly: price
                },
                [newStat]: {
                    LastTradePriceOnly: price
                }
            },
            statsOrder: [oldStat, newStat],
            prices: {
                [oldStat]: price,
                [newStat]: price
            },
            error: undefined
        }

        expect(reducer).toEqual(response);
    });

    it("should handle RECEIVE_STAT_FAIL", () => {

        const message = "fail whale";

        const action = {
            type: types.RECEIVE_STAT_FAIL,
            message
        };

        const reducer = statReceivedReducer(initalState, action);

        const response = Object.assign({}, initalState, {
            error: message, 
        });

        expect(reducer).toEqual(response);
    });
});