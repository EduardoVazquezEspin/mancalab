import { legacy_createStore as legacyCreateStore, combineReducers } from 'redux'
import { cardReducer, createCard } from '../reducers/cards'
import { seedReducer, createSeed } from '../reducers/seeds'

const createData = (store) => {
  store.dispatch(createCard('test', 'this is a testing card see if it works', 'test'))
  store.dispatch(createSeed({ color: 'blue', location: 1 }))
  store.dispatch(createSeed({ color: 'red', location: 1 }))
  store.dispatch(createSeed({ color: 'red', location: 'player-top' }))
  store.dispatch(createSeed({ color: 'brown', location: 'player-bottom' }))
  store.dispatch(createSeed({ color: 'white', location: 3 }))
}

const createStore = () => {
  const reducers = combineReducers({
    cards: cardReducer,
    seeds: seedReducer
  })

  const store = legacyCreateStore(reducers)

  createData(store)

  return store
}

export default createStore
