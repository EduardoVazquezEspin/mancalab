export const seedReducer = (state = [], action) => {
  let result = []
  switch (action.type) {
    case '@seed/create_seed':
      result = [...state, action.payload]
      result[result.length - 1].id = result.length
      return result
    case '@seed/reset_board':
      result = state.map(seed => {
        const newSeed = structuredClone(seed)
        newSeed.location = 'bag'
        return newSeed
      })
      for (let i = 0; i < 12; i++) {
        for (let k = 0; k < action.payload.seedsPerPocket; k++) {
          let index
          do {
            index = Math.floor(Math.random() * state.length)
          } while (result[index].location !== 'bag')
          result[index].location = i
        }
      }
      return result
    default:
      return state
  }
}

export const createSeed = ({ color, location = 'bag' }) => {
  return {
    type: '@seed/create_seed',
    payload: {
      id: 0,
      color,
      location
    }
  }
}

export const resetBoard = (seedsPerPocket = 4) => {
  return {
    type: '@seed/reset_board',
    payload: {
      seedsPerPocket
    }
  }
}
