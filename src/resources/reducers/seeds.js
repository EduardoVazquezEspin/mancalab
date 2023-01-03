export const seedReducer = (state = [], action) => {
  let result = []
  switch (action.type) {
    case '@seed/create_seed':
      result = [...state, action.payload]
      result[result.length - 1].id = result.length
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
