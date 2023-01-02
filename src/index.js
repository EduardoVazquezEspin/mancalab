import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import CardDisplayer from './components/CardDisplayer'
import createStore from './resources/storage/storeCreator'

const store = createStore()

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CardDisplayer />
    </Provider>
  </React.StrictMode>
)
