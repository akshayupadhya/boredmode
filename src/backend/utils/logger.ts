// import { RequestHandler } from 'express'
import { Router } from 'express'

import { join } from 'path'
import { existsSync, mkdirSync } from 'fs'
import morgan from 'morgan'
import rfs from 'rotating-file-stream'

const logDirectory = join('logs')

existsSync(logDirectory) || mkdirSync(logDirectory)

const accessLogStream = rfs('access.log', {
	interval: '1d', // rotate daily
	path: logDirectory,
})

const logger: Router = Router()
logger.use(morgan('combined', { stream: accessLogStream }))
export default logger
