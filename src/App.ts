import express from 'express'
import { resolve } from 'path'
import api from './backend/routes'
import Frontend from './Frontend'

const app = express()

app.use(express.static(resolve(__dirname, '../dist/public')))
app.use('/api', api)
app.use('/',Frontend)

export default app
