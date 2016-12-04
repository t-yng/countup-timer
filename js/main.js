import React from 'react'
import {Provider} from 'react-redux'
import {render} from 'react-dom'
import {createStore} from 'redux'

import App from './container.js'
import {timer} from './reducer.js'

const store = createStore(timer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('timer-container')
)
