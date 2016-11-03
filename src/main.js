import 'babel-polyfill'
import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { render } from 'react-dom'
import App from './app'
import appReducer from './appReducer'

const store = createStore(appReducer)

render(<Provider store={store}><App /></Provider>, document.getElementById('appMain'))
