import { Router } from 'express'
import indexController from './controllers/index'
import { messagesController } from './graphql/gql'
import logger from './utils/logger'
import app from '../App'
const api: Router = Router()

api.use(logger)
api.get('/', indexController)
api.use('/messages', messagesController)

export default api
