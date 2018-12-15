import React,{ Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import { routes } from './Routes'
import { NavBar } from './Components/NavBar'
export default function AppRouter (props: any) {
	return (
		<Fragment>
			<NavBar/>
			<Switch>
				{
					routes
					.map(
						({ path, exact, component: C, ...rest }) => (
							<Route
								key={path}
								path={path}
								exact={exact}
								render={(props) => (
									<C {...props} {...rest} />
								)}
							/>
						)
					)
				}
			</Switch>
		</Fragment>
	)
}
