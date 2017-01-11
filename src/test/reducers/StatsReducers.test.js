import {statReceivedReducer, initalState} from '../../reducers/StatsReducers';
import * as types from '../../types/StatsTypes';

describe("StatsReducers", () => {

    it("should return inital state", () => {
        const reducer = statReceivedReducer(undefined, {});
        expect(reducer).toEqual(initalState);
    });


    it("should handle RECEIVE_STAT", () => {

        const lastTradePriceOnly = "123";
        
        const data = {
            query: {
                results: {
                    quote: "4321"
                }
            }
        }

        const action = {
            type: types.RECEIVE_STAT,
            stat:"RBS.L",
            stats: {lastTradePriceOnly},
            data
        };

        const state = { lastTradePriceOnly };
        const reducer = statReceivedReducer(state, action);
        
        const response =  {         
            stats: {
                "RBS.L": data
            },
            statsOrder: ["RBS.L"],
            lastTradePriceOnly,
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
            lastTradePriceOnly: undefined, 
            stats: {}, 
            statsOrder: []
        }

        expect(reducer).toEqual(response);
    });
});