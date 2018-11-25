import { Router } from 'express'
import indexController from './controllers/index'

const api: Router = Router()

api.get('/', indexController)

export default api
