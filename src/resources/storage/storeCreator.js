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
  // store.dispatch(createCard('test', 'this is a testing card see if it works', 'test.png'))
  store.dispatch(createCard('Thief Instinct', '+2 at stealing', 'thief.png'))
  store.dispatch(createCard('4 seasons', 'beethoven would be proud', 'seasons.png'))
  store.dispatch(createCard('puente', 'de puente en puente y tiro...', 'puente.webp'))
  store.dispatch(createCard('doomed pocket', 'set socket as doomed', 'hole.png'))
  store.dispatch(createCard('slow down', 'no extra turns for you sir', 'clock.png'))
  store.dispatch(createCard('confusion', 'set sockets to go backwards', 'spinda.webp'))
  store.dispatch(createCard('chaos', 'throw a coin: heads win tails lose', 'chaos.jpg'))
  store.dispatch(createCard('Time of Plenty', '+1 seed all sockets', 'plenty.webp'))
  store.dispatch(createCard('Time of Misery', '-1 seed all sockets', 'misery.webp'))
  store.dispatch(createCard('Time is Short', 'play in real time', 'wololo.jpeg'))
  store.dispatch(createCard('Time of Harvest', 'when landing on own non-empty socket, sow again', 'harvest.jpg'))
  store.dispatch(createCard('Time of RNG', '1D6 lands on empty, lose turn', 'random.jpg'))
  store.dispatch(createCard('Time of Ruin', 'first socket sowed becomes dead', 'desert.jpeg'))
  store.dispatch(createCard('Poisoned Seed', 'Must be last. Erase all seeds in socket', 'purple.png'))
  store.dispatch(createCard('Rotten Seed', 'Counts as -3 points', 'green.png'))
  store.dispatch(createCard('Wind Seed', 'Must be last. Swap seeds with final pocket', 'turquoise.png'))
  store.dispatch(createCard('Jumpy Seed', 'Must be first. You can jump first pocket', 'orange.png'))
  store.dispatch(createCard('Golden Seed', 'Counts as +4 points', 'golden.png'))
  store.dispatch(createCard('Spinda Seed', 'When scored, swap pockets', 'red.png'))
  store.dispatch(createCard('Parental Seed', 'Must be first. Can move ALL seeds, but no score', 'pink.png'))
  store.dispatch(createCard('Moonwalk Seed', 'Must be first. Can move backwards once', 'blue.png'))
  createSeeds(store, 31, 'saddlebrown')
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
