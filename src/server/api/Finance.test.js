import Finance from './Finance'
import googleFinance from 'google-finance'

describe("Finance", () => {

    const req = {
        query : {
            days: "",
            symbol: ""
        }
    }

    it ("should call googleFinance.historical", () => {

        const res = jest.fn()
        googleFinance.historical = jest.fn()

        Finance(req, res)

        expect(googleFinance.historical).toBeCalled()
    })


    it ("googleFinance should call res.send when historical has been called ", () => {

        const res = jest.fn()
        res.send = jest.fn()
        googleFinance.historical = (option, callback) => callback("err", "quote")

        Finance(req, res)

        expect(res.send).toBeCalled()
    })

})