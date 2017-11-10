import googleFinance from 'google-finance'
import moment from 'moment'

const Finance = (req, res) => {

    const {days, symbol} = req.query

    const from = moment().subtract(days, "days").format("YYYY-MM-DD")
    const to = moment().format("YYYY-MM-DD")

    const options = { symbol, from, to }

    googleFinance.historical(options, (err, quotes) => res.send(quotes))
}

export default Finance