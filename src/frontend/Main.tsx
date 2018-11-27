import React from 'react'
import { hydrate } from 'react-dom'

import AppComponent from './App'

hydrate(
	<AppComponent />,
	document.getElementById('app')
)
