import { useSelector, useDispatch } from 'react-redux'
import { getCurrentHand, getCurrentPlayer, getSeedsFilter } from '../../resources/helpers/redux.helpers'
import { Socket, SeedContainer } from './style'
import SeedDisplayer from '../SeedDisplayer'
import { moveSeed } from '../../resources/reducers/seeds'

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
  const currentPlayer = useSelector(state => getCurrentPlayer(state))
  const currentHand = useSelector(state => getCurrentHand(state))
  const first = currentHand.filter(seed => seed.location.includes('first'))
  const second = currentHand.filter(seed => seed.location.includes('second'))
  const last = currentHand.filter(seed => seed.location.includes('last'))
  const dispatch = useDispatch()
  const MoveSeeds = () => {
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
  }
  return (
    <Socket width={width} height={height} posX={posX} posY={posY} onClick={() => MoveSeeds()}>
      <SeedContainer>
        {seeds.map((seed, it) => {
          const randomPos = getRandomPosition(seed.id + 60 * location.toString().length)
          return <SeedDisplayer key={it} color={seed.color} left={randomPos.left} top={randomPos.top} seed={seed} />
        })}
      </SeedContainer>
    </Socket>
  )
}

export default SocketDisplayer
