import { useSelector } from 'react-redux'
import { getSeedsFilter } from '../../resources/helpers/redux.helpers'
import { Socket, SeedContainer } from './style'
import SeedDisplayer from '../SeedDisplayer'

const getRandomPosition = () => {
  let top, left
  do {
    top = Math.random() * 100
    left = Math.random() * 100
  } while ((top - 46) * (top - 46) + (left - 46) * (left - 46) > 38 * 38)
  return { top, left }
}

const SocketDisplayer = ({ location, width = '12.5%', height = '50%', posX = 0, posY = 0 }) => {
  const seeds = useSelector(state => getSeedsFilter(state, { location }))
  return (
    <Socket width={width} height={height} posX={posX} posY={posY}>
      <SeedContainer>
        {seeds.map((seed, it) => {
          const randomPos = getRandomPosition()
          return <SeedDisplayer key={it} color={seed.color} left={randomPos.left} top={randomPos.top} />
        })}
      </SeedContainer>
    </Socket>
  )
}

export default SocketDisplayer
