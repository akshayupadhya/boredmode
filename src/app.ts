import express from 'express'
import api from './backend/routes'

const app = express()
app.get('/',(req,res) => {
	res.send(`hello there`)
})
app.use('/api', api)

export default app
