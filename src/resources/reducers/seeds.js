export const seedReducer = (state = [], action) => {
  let result = []
  switch (action.type) {
    case '@seed/create_seed':
      result = [...state, action.payload]
      result[result.length - 1].id = result.length
      return result
    case '@seed/move_seed':
      return state.map(seed => {
        if (seed.id !== action.payload.id) {
          return seed
        }
        result = seed
        result.location = action.payload.newLocation
        return result
      })
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
    case '@seed/move_from_bag':
      result = state.filter(seed => seed.location === 'bag')
      if (result.length === 0) {
        return state.map(seed => seed)
      }
      result = result[Math.floor(Math.random() * result.length)]
      return state.map(seed => {
        if (seed.id === result.id) {
          seed.location = action.payload.location
        }
        return seed
      })
    case '@seed/flip_the_board':
      return state.map(seed => {
        if (parseInt(Number(seed.location)) !== seed.location) {
          return seed
        }
        seed.location = 11 - seed.location
        return seed
      })
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

export const moveSeed = (id, newLocation) => {
  return {
    type: '@seed/move_seed',
    payload: {
      id,
      newLocation
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

export const moveSeedFromBag = (location) => {
  return {
    type: '@seed/move_from_bag',
    payload: {
      location
    }
  }
}

export const flipTheBoard = () => {
  return {
    type: '@seed/flip_the_board',
    payload: {}
  }
}
