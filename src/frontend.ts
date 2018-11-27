import express,{ Router ,Request,Response } from 'express'
import path from 'path'

import React,{ Component } from 'react'
import { renderToString } from 'react-dom/server'

import AppComponent from './frontend/main'

const Frontend: Router = express()
Frontend.use(express.static(path.resolve(__dirname, '../public')))

Frontend.get('/', (req: Request, res: Response) => {
	const jsx = React.createElement(AppComponent)
	const reactDom: String = renderToString(jsx)

	res.writeHead(200, { 'Content-Type': 'text/html' })
	res.end(htmlTemplate(reactDom))
	// res.send(`string`)
})
function htmlTemplate (reactDom: String) {
	return `
	<!DOCTYPE html>
	<html>
		<head>
			<meta charset="utf-8">
			<title>React SSR</title>
		</head>
		<body>
			<div id="app">${ reactDom }</div>
			<script src="./bundle.js" defer></script>
		</body>
	</html>
				`
}
export default Frontend
