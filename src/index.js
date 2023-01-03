import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import createStore from './resources/storage/storeCreator'
import Mancalapp from './components/Mancalapp'

const store = createStore()

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {console.log(store.getState())}
      <Mancalapp />
    </Provider>
  </React.StrictMode>
)
