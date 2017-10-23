import {pathName, stripPath, updateUrl} from './AppService'
import {INDEX} from "../consts/AppConsts"
import { browserHistory } from 'react-router'

describe("AppService", () => {

    it("pathName should return a stripped path", () => {

        const pathname = "/my-magic-path"

        const routing = {locationBeforeTransitions: {pathname}}
        const pathNameStripped = pathName(routing)
        expect(pathNameStripped).toEqual('my-magic-path')
    })

    it("empty pathName should return revenue", () => {

        const pathname = ""

        const routing = {locationBeforeTransitions: {pathname}}
        const pathNameStripped = pathName(routing)
        expect(pathNameStripped).toEqual(INDEX)
    })

    it("slash pathName should return revenue", () => {

        const pathname = "/"

        const routing = {locationBeforeTransitions: {pathname}}
        const pathNameStripped = pathName(routing)
        expect(pathNameStripped).toEqual(INDEX)
    })


    it("updateUrl strips the path and updates browserHistory", () => {

        const pathname = "my-magic-path"
        const pushMock = jest.fn()

        browserHistory.push = pushMock

        updateUrl(pathname)

        expect(pushMock).toBeCalledWith(/#/ + pathname)
    })
})