export const getCardById = (state, id) => {
  const result = state.cards.filter(card => card.id === id)
  if (result.length === 0) return { id: 0, name: '', text: '', img: '../../img/test' }
  return result[0]
}
