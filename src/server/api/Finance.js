import googleFinance from 'google-finance'
import moment from 'moment'

const Finance = (req, res, next) => {

    const {days, symbol} = req.query

    const from = moment().subtract(days, "days").format("YYYY-MM-DD")
    const to = moment().format("YYYY-MM-DD")

    const options = { symbol, from, to }

    const callback = (err, quotes) => {
        res.send(quotes)
    }

    googleFinance.historical(options, callback)
}

export default Finance