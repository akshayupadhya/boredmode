import React from 'react'
import ReactDOM from 'react-dom'

import AppComponent from './main'

ReactDOM.hydrate(
		<AppComponent />,
		document.getElementById('app')
	)
