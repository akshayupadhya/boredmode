import express from 'express'
import api from './backend/routes'

import Frontend from './Frontend'
const app = express()
app.use('/api', api)
app.use('/',Frontend)

export default app
