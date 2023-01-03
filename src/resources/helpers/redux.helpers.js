export const getCardById = (state, id) => {
  const result = state.cards.filter(card => card.id === id)
  if (result.length === 0) return { id: 0, name: '', text: '', img: '../../img/test' }
  return result[0]
}

export const getCardsFilter = (state, cardData) => {
  return state.cards.filter(card => {
    return Object.keys(cardData).every(index => {
      return card[index] === cardData[index]
    })
  })
}

export const getSeedsFilter = (state, seedData) => {
  return state.seeds.filter(seed => {
    return Object.keys(seedData).every(index => {
      return seed[index] === seedData[index]
    })
  })
}

export const getCurrentPlayer = (state) => {
  return state.gameState[0].currentPlayer
}
