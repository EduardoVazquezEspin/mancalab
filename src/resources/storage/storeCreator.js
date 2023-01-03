import { legacy_createStore as legacyCreateStore, combineReducers } from 'redux'
import { cardReducer, createCard } from '../reducers/cards'
import { gameStateReducer, initGameState } from '../reducers/gameState'
import { seedReducer, createSeed, resetBoard } from '../reducers/seeds'

const createSeeds = (store, numberOfSeeds, color) => {
  for (let i = 0; i < numberOfSeeds; i++) {
    store.dispatch(createSeed({ color, location: 'bag' }))
  }
}

const createData = (store) => {
  store.dispatch(initGameState())
  store.dispatch(createCard('test', 'this is a testing card see if it works', 'test'))
  store.dispatch(createCard('Thief Instinct', '+2 at stealing', 'thief'))
  store.dispatch(createCard('4 seasons', 'beethoven would be proud', 'seasons'))
  createSeeds(store, 24, 'saddlebrown')
  createSeeds(store, 1, 'purple')
  createSeeds(store, 3, 'darkgreen')
  createSeeds(store, 5, 'turquoise')
  createSeeds(store, 5, 'orange')
  createSeeds(store, 3, 'gold')
  createSeeds(store, 2, 'red')
  createSeeds(store, 5, 'pink')
  createSeeds(store, 5, 'blue')
  store.dispatch(resetBoard(4))
}

const createStore = () => {
  const reducers = combineReducers({
    cards: cardReducer,
    seeds: seedReducer,
    gameState: gameStateReducer
  })

  const store = legacyCreateStore(reducers)

  createData(store)

  return store
}

export default createStore
