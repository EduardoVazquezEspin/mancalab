export const cardReducer = (state = [], action) => {
  let result = []
  switch (action.type) {
    case '@card/create_card':
      result = [...state, action.payload]
      result[result.length - 1].id = result.length
      return result
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
      img
    }
  }
}
