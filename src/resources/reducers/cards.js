export const cardReducer = (state = [], action) => {
  let result = []
  switch (action.type) {
    case '@card/create_card':
      result = [...state, action.payload]
      result[result.length - 1].id = result.length
      return result
    case '@card/move_card':
      return state.map(card => {
        if (card.id !== action.payload.id) {
          return card
        }
        result = card
        result.location = action.payload.newLocation
        return result
      })
    default:
      return state
  }
}

export const createCard = (name, text, img) => {
  return {
    type: '@card/create_card',
    payload: {
      id: 0,
      name,
      text,
      img,
      location: 'deck'
    }
  }
}

export const moveCard = (id, newLocation) => {
  return {
    type: '@card/move_card',
    payload: {
      id,
      newLocation
    }
  }
}
