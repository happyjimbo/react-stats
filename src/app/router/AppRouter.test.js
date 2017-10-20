import {index, pathName, route, stripPath} from './AppRouter'
import * as StatTypes from '../../stats/consts/StatTypes'
import {FETCH_STATS} from '../../stats/consts/StatsActionTypes'

describe("AppRouter", () => {

    it ("pathName should return a stripped path", () => {

        const pathname = "/my-magic-path"

        const routing = { locationBeforeTransitions : { pathname } }
        const pathNameStripped = pathName(routing)
        expect(pathNameStripped).toEqual('my-magic-path')

        const strippedPath = stripPath(pathname)
        expect(strippedPath).toEqual('my-magic-path')
    })

    it ("empty pathName should return index", () => {

        const pathname = ""

        const routing = { locationBeforeTransitions : { pathname } }
        const pathNameStripped = pathName(routing)
        expect(pathNameStripped).toEqual(index)

        const strippedPath = stripPath(pathname);
        expect(strippedPath).toEqual(index)
    })

    it ("slash pathName should return index", () => {

        const pathname = "/"

        const routing = { locationBeforeTransitions : { pathname } }
        const pathNameStripped = pathName(routing)
        expect(pathNameStripped).toEqual(index)

        const strippedPath = stripPath(pathname)
        expect(strippedPath).toEqual(index)
    })

    it ("route should return REVENUE when invalid path is passed", () => {            
        const action = route("oinsdiofnsdoisn")
        expect(action).toEqual({type: FETCH_STATS, statType:StatTypes.INDEX})
    });

    it ("route should return the correct FETCH_STATS action", () => {
        
        const action = route(index)
        expect(action).toEqual({type: FETCH_STATS, statType:StatTypes.INDEX})
    })
})