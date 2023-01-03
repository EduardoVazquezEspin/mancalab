import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import createStore from './resources/storage/storeCreator'
import CardDisplayer from './components/CardDisplayer'
import BoardDisplayer from './components/BoardDisplayer'

const store = createStore()

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {console.log(store.getState())}
      <CardDisplayer />
      <BoardDisplayer />
    </Provider>
  </React.StrictMode>
)
