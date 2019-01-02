import Home from './routes/Home'
import Route1 from './routes/Route1'

interface Route {
	path: string,
	component: any,// can it be a component?
	exact: boolean
}
export const routes: Array<Route> = [
	{ path: '/', component: Home, exact: true },
	{ path: '/r1',component: Route1,exact: true }
]
