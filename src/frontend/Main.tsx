import React from 'react'
import { hydrate } from 'react-dom'

import App from './App'

// declare global {
// interface Window {
// 		__INITIAL_DATA__: any
// 	}
// }
// ^ ts drama , ikr
// but still breaks linter
hydrate(<App/>, document.getElementById('app'))
