import {FETCH_STATS} from "../../stats/consts/StatsActionTypes"
import {FETCH_ABOUT} from "../../about/consts/AboutConsts"
import {ABOUT} from "../consts/AppConsts"
import {INDEX} from "../../stats/consts/StatTypes"
import {setRoute} from "./AppAction"

describe('AppAction', ()=> {

    it("route should return FETCH_STATS when invalid path is passed", () => {
        let action = setRoute("oinsdiofnsdoisn")
        expect(action).toEqual({type: FETCH_STATS})
    })

    it("route should return FETCH_STATS when INDEX is passed", () => {

        let action = setRoute(INDEX)
        expect(action).toEqual({type: FETCH_STATS})
    })

    it("route should return FETCH_ABOUT when ABOUT is passed", () => {

        let action = setRoute(ABOUT)
        expect(action).toEqual({type: FETCH_ABOUT})
    })
})