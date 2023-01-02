import { legacy_createStore as legacyCreateStore, combineReducers } from 'redux'
import { cardReducer, createCard } from '../reducers/cards'

const createData = (store) => {
  store.dispatch(createCard('test', 'this is a testing card see if it works', 'test'))
}

const createStore = () => {
  const reducers = combineReducers({
    cards: cardReducer
  })

  const store = legacyCreateStore(reducers)

  createData(store)

  return store
}

export default createStore
