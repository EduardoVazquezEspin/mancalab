export const gameStateReducer = (state = {}, action) => {
  let result = {}
  switch (action.type) {
    case '@gameState/init_game_state':
      return action.payload
    case '@gameState/swap_players':
      result = structuredClone(state)
      result.currentPlayer = state.currentPlayer === 'player-top' ? 'player-bottom' : 'player-top'
      return result
    case '@gameState/change_number_of_seeds':
      result = structuredClone(state)
      result.numberOfSeeds += action.payload.value
      if (result.numberOfSeeds < 1) {
        result.numberOfSeeds = 1
      }
      if (result.numberOfSeeds > 5) {
        result.numberOfSeeds = 5
      }
      return result
    case '@gameState/change_cursor_mode':
      result = structuredClone(state)
      result.cursorMode = action.payload.newMode
      return result
    case '@gameState/set_bridge':
      result = structuredClone(state)
      result.bridge = action.payload.position
      return result
    default:
      return state
  }
}

export const initGameState = () => {
  return {
    type: '@gameState/init_game_state',
    payload: {
      currentPlayer: 'player-top',
      numberOfSeeds: 4,
      cursorMode: 'Select',
      bridge: -1
    }
  }
}

export const swapPlayers = () => {
  return {
    type: '@gameState/swap_players',
    payload: {}
  }
}

export const changeNumberOfSeeds = (value) => {
  return {
    type: '@gameState/change_number_of_seeds',
    payload: {
      value
    }
  }
}

export const changeCursorMode = (newMode) => {
  return {
    type: '@gameState/change_cursor_mode',
    payload: {
      newMode
    }
  }
}

export const setBridge = (position) => {
  return {
    type: '@gameState/set_bridge',
    payload: {
      position
    }
  }
}
