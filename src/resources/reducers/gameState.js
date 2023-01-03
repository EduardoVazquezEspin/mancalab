export const gameStateReducer = (state = [], action) => {
  let result = {}
  switch (action.type) {
    case '@gameState/init_game_state':
      return [action.payload]
    case '@gameState/swap_players':
      result = structuredClone(state[0])
      result.currentPlayer = state[0].currentPlayer === 'player-top' ? 'player-bottom' : 'player-top'
      return [result]
    default:
      return state
  }
}

export const initGameState = () => {
  return {
    type: '@gameState/init_game_state',
    payload: {
      currentPlayer: 'player-top'
    }
  }
}

export const swapPlayers = () => {
  return {
    type: '@gameState/swap_players',
    payload: {}
  }
}
