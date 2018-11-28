import React from 'react'
import { hydrate } from 'react-dom'

import AppComponent from './App'

hydrate(
	<AppComponent data={window.__INITIAL_DATA__}/>,
	document.getElementById('app')
)
