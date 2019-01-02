import React,{ Component } from 'react'
import { StaticRouter } from 'react-router-dom'

// import AppComponent from './App';
import AppRouter from './Router'
// interface Props{
// 	location: string
// }
export const ServerApp = (props: any): JSX.Element => {
	return (
		<StaticRouter location={props.location} context={props.context}>
			<AppRouter />
		</StaticRouter>
	)
}
