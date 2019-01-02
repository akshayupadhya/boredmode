import { Router } from 'express'
import indexController from './controllers/index'
import { messagesController } from './graphql/gql'

const api: Router = Router()

api.get('/', indexController)
api.use('/messages',messagesController)

export default api
