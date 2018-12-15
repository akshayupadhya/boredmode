import express, { Router, Request, Response } from 'express'
import { resolve } from 'path'
import { readFile } from 'fs'
import { promisify } from 'util'
import React, { createElement } from 'react'
import { renderToString } from 'react-dom/server'
import serialize from 'serialize-javascript'
import { ServerApp } from './frontend/Server'

const AsyncFileRead = promisify(readFile) // really need to understand why its not letting me assign it to type Promise<any|string>, seems like people are having trouble with promisify library
const Frontend: Router = express()
Frontend.use(express.static(resolve(__dirname, '../dist/public')))

Frontend.get('/*',
	async (req: Request, res: Response) => {
		try {
			const data = 'data'
			const location: string = req.url
			const context = {} // this is not required for now
			const props = { location,context }

			const jsx = createElement(ServerApp,props)
			const reactDom: string = renderToString(jsx)
			let html = await AsyncFileRead(resolve(__dirname, '../assets/index.html'), 'utf8')
			const title: string = 'react app'
			const keywords: string = `{${['boredmode','coolapp'].join(', ')}}`
			const initialData = data ? data : undefined
			html = html
						.replace(/<!-- title -->/,title)
						.replace(/<!--initial_data-->/,serialize(initialData))
						.replace(/<!--keywords-->/, keywords)
						.replace(/<!-- server-rendered-component -->/, reactDom)
			res.writeHead(200, { 'Content-Type': 'text/html' })
			res.end(html)
		} catch (e) {
			console.log(`its an error`, e)
		}
	}
)

export default Frontend
