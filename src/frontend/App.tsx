import React,{ Component } from 'react'

import { BrowserRouter } from 'react-router-dom'

import AppRouter from './Router'
export default class App extends Component {
	public render () {
		return(
			<BrowserRouter>
				<AppRouter />
			</BrowserRouter>
		)
	}
}
