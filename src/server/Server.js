import express from 'express'
import Finance from './api/Finance'

let app = express()

app.use((req, res, next) => {

	let corsOrigin = req.headers.origin

	if (process.env.ENVIRONMENT == 'production' ) {
		corsOrigin = process.env.CORS
	}

	res.header("Access-Control-Allow-Origin", corsOrigin) 
	res.header("Access-Control-Allow-Credentials", true)
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
	next()
})

app.get('/finance', Finance)

app.set('port', (process.env.PORT || 4000));

app.listen(app.get('port'), () => {
	console.log('Stocks App listening on port ' + app.get('port'))
})
