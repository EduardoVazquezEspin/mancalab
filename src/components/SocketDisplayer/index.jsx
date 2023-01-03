import { useSelector } from 'react-redux'
import { getSeedsFilter } from '../../resources/helpers/redux.helpers'
import { Socket, SeedContainer } from './style'
import SeedDisplayer from '../SeedDisplayer'

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
  return (
    <Socket width={width} height={height} posX={posX} posY={posY}>
      <SeedContainer>
        {seeds.map((seed, it) => {
          const randomPos = getRandomPosition(seed.id)
          return <SeedDisplayer key={it} color={seed.color} left={randomPos.left} top={randomPos.top} />
        })}
      </SeedContainer>
    </Socket>
  )
}

export default SocketDisplayer
