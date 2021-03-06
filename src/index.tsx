import React from 'react'
import ReactDOM from 'react-dom'

import EntryPoint from './EntryPoint'
import './index.css'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(<EntryPoint />, document.getElementById('root') as HTMLElement)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
