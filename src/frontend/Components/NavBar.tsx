import React from 'react'
import { NavLink } from 'react-router-dom'
export function NavBar (): JSX.Element {
	return (
		<ul>
			<li>
				<NavLink to='/'>Home</NavLink>
			</li>
			<li>
				<NavLink to='/r1'>Todos</NavLink>
			</li>
			<li>
				<NavLink to='/posts'>Posts</NavLink>
			</li>
		</ul>
	)
}
