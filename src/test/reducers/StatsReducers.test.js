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


    it("should handle RECEIVE_STAT one stat", () => {

        const action = {
            type: types.RECEIVE_STAT,
            stat:"RBS.L",
            data
        };

        const state = {};
        const reducer = statReceivedReducer(state, action);
        
        const response =  {         
            stats: {
                "RBS.L": data
            },
            statsOrder: ["RBS.L"],
            prices: {
                "RBS.L": price
            },
            error: undefined
        }

        expect(reducer).toEqual(response);
    });

    it("should handle RECEIVE_STAT two stats", () => {
        
        const action = {
            type: types.RECEIVE_STAT,
            stat:"RBS.L",
            data
        };

        const state = 
        { 
            stats: {
                "LLOY.L": data
            },
            statsOrder: ["LLOY.L"],
            prices: {
                "LLOY.L": price
            },
            error: undefined
        };

        const reducer = statReceivedReducer(state, action);
        
        const response =  {         
            stats: {
                "LLOY.L": data,
                "RBS.L": data
            },
            statsOrder: ["LLOY.L", "RBS.L"],
             prices: {
                "LLOY.L": price,
                "RBS.L": price
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
        const response =  {
            error: message, 
            prices: undefined, 
            stats: {}, 
            statsOrder: []
        }

        expect(reducer).toEqual(response);
    });
});