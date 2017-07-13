import express from 'express'
import session from 'express-session'
import RedisStore from 'connect-redis'
import json from '../tokens.json'
import Finance from './api/Finance'

let app = express()

let cookie = {		
	secure: false, 
	maxAge: 604800000 // 7 days
}

let Redis = RedisStore(session)

const redisOptions = {
	host: 'redis',
	port: 6379
}

app.use(session({
	store: new Redis(redisOptions),
	secret: json.sessionSecret,
	resave: false,
  	saveUninitialized: true,
	cookie
}))

app.use((req, res, next) => {

	let corsOrigin = req.headers.origin

	if ( process.env.ENVIRONMENT == 'production' ) {
		corsOrigin = process.env.CORS
	}

	res.header("Access-Control-Allow-Origin", corsOrigin) 
	res.header("Access-Control-Allow-Credentials", true)
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
	next()
})

app.get('/finance', Finance)

app.listen(4000, () => {
	console.log('Stats App listening on port 4000!')
})
