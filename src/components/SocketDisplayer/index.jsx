import { useSelector, useDispatch } from 'react-redux'
import { getBridge, getCurrentHand, getCurrentPlayer, getCursorMode, getSeedsFilter } from '../../resources/helpers/redux.helpers'
import { Socket, SeedContainer } from './style'
import SeedDisplayer from '../SeedDisplayer'
import { moveSeed, moveSeedFromBag } from '../../resources/reducers/seeds'
import { useState } from 'react'
import { setBridge } from '../../resources/reducers/gameState'

const isInt = (cadena) => {
  return parseInt(Number(cadena)) === cadena
}

let seed

const getRand = () => {
  const x = Math.sin(seed) * 10000
  seed += 100
  return x - Math.floor(x)
}

const getRandomPosition = (id) => {
  let top, left
  seed = id
  do {
    top = getRand() * 100
    left = getRand() * 100
  } while ((top - 46) * (top - 46) + (left - 46) * (left - 46) > 38 * 38)
  return { top, left }
}

const SocketDisplayer = ({ location, width = '12.5%', height = '50%', posX = 0, posY = 0 }) => {
  const seeds = useSelector(state => getSeedsFilter(state, { location }))
  const [backgroundState, setBackgroundState] = useState('normal')
  const currentPlayer = useSelector(state => getCurrentPlayer(state))
  const currentHand = useSelector(state => getCurrentHand(state))
  const first = currentHand.filter(seed => seed.location.includes('first'))
  const second = currentHand.filter(seed => seed.location.includes('second'))
  const last = currentHand.filter(seed => seed.location.includes('last'))
  const cursorMode = useSelector(state => getCursorMode(state))
  const bridge = useSelector(state => getBridge(state))
  const dispatch = useDispatch()
  const MoveSeeds = () => {
    if (cursorMode === 'Select') {
      if (currentHand.length === 0 && isInt(location)) {
        seeds.forEach(seed => dispatch(moveSeed(seed.id, currentPlayer + '-second')))
      } else if (isInt(location) || location.toString().includes('store')) {
        if (first.length !== 0) {
          const seedToMove = first[Math.floor(Math.random() * first.length)]
          dispatch(moveSeed(seedToMove.id, location))
        } else if (second.length !== 0) {
          const seedToMove = second[Math.floor(Math.random() * second.length)]
          dispatch(moveSeed(seedToMove.id, location))
        } else {
          const seedToMove = last[Math.floor(Math.random() * last.length)]
          dispatch(moveSeed(seedToMove.id, location))
        }
      }
    } else if (cursorMode === 'Add Seed') {
      dispatch(moveSeedFromBag(location))
    } else if (cursorMode === 'Pocket State') {
      const socketStates = ['normal', 'forbidden', 'doomed', 'magic', 'confused']
      const index = socketStates.indexOf(backgroundState)
      setBackgroundState(socketStates[(index + 1) % socketStates.length])
    } else if (cursorMode === 'Bridge' && isInt(location)) {
      dispatch(setBridge((location % 6 === bridge ? -1 : location % 6)))
    }
  }
  return (
    <Socket width={width} height={height} posX={posX} posY={posY} onClick={() => MoveSeeds()} backgroundState={backgroundState}>
      <SeedContainer>
        {seeds.map((seed, it) => {
          const randomPos = getRandomPosition(seed.id + (isInt(location) ? 67 * location : 113 * location.toString().length))
          return <SeedDisplayer key={it} color={seed.color} left={randomPos.left} top={randomPos.top} seed={seed} />
        })}
      </SeedContainer>
    </Socket>
  )
}

export default SocketDisplayer
