import { useDispatch, useSelector } from 'react-redux'
import { moveSeed } from '../../resources/reducers/seeds'
import { getCursorMode } from '../../resources/helpers/redux.helpers'
import { Seed } from './style'

const SeedDisplayer = ({ color, left = 0, top = 0, seed = {} }) => {
  const dispatch = useDispatch()
  const cursorMode = useSelector(state => getCursorMode(state))
  const MoveThisSeed = () => {
    if (cursorMode === 'Select') {
      if (seed.location.toString().includes('first')) {
        dispatch(moveSeed(seed.id, seed.location.toString().replace('first', 'last')))
      } else if (seed.location.toString().includes('second')) {
        dispatch(moveSeed(seed.id, seed.location.toString().replace('second', 'first')))
      } else if (seed.location.toString().includes('last')) {
        dispatch(moveSeed(seed.id, seed.location.toString().replace('last', 'second')))
      }
    } else if (cursorMode === 'Remove Seed') {
      dispatch(moveSeed(seed.id, 'bag'))
    }
  }
  return <Seed color={color} left={left} top={top} onClick={() => MoveThisSeed()} />
}

export default SeedDisplayer
