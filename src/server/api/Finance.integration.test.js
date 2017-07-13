import googleFinance from 'google-finance'
import moment from 'moment'

describe('Integration tests of the Finance Library, to confirm that it works as expected', () => {

    it ('should get company news from finance lib', done => {

        const options = { symbol: 'NASDAQ:AAPL' }

        const callback = (err, news) => {
            expect(err).toBeNull()
            expect(news).toBeTruthy()
            done();
        }

        googleFinance.companyNews(options, callback)
    })

    it ('should get historical data from finance lib', done => {
        const options = { 
            symbol: 'FTSE:LLOY',
            from: '2017-07-02',
            to: '2017-07-10'
         }

        const callback = (err, quotes) => {
            expect(err).toBeNull()
            expect(quotes).toBeTruthy()
            expect(quotes.length).toBe(5)
            done();
        }

        googleFinance.historical(options, callback)
    })

    it ('should get assert the format of the historical data from finance lib', done => {
        const options = { 
            symbol: 'FTSE:LLOY',
            from: '2017-07-03',
            to: '2017-07-04'
         }

        const callback = (err, quotes) => {
            expect(err).toBeNull()

            const {date, open, high, low, close, volume, symbol} = quotes[0]
            expect(date).toBeTruthy()
            expect(open).toBeTruthy()
            expect(high).toBeTruthy()
            expect(low).toBeTruthy()
            expect(close).toBeTruthy()
            expect(volume).toBeTruthy()
            expect(symbol).toBeTruthy()
            done();
        }

        googleFinance.historical(options, callback)
    })

     it ('should test getting historical data with moment api', done => {

        const past = moment().subtract(30, "days").format("YYYY-MM-DD")
        const now = moment().format("YYYY-MM-DD")

        const options = { 
            symbol: 'FTSE:LLOY',
            from: past,
            to: now
         }

        const callback = (err, quotes) => {
            expect(err).toBeNull()
            expect(quotes).toBeTruthy()
            done();
        }

        googleFinance.historical(options, callback)
    })
})