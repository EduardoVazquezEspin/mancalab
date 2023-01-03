import { useDispatch } from 'react-redux'
import { resetBoard } from '../../resources/reducers/seeds'
import { Frame } from './style'
import Button from '../Button'

const ButtonHolder = () => {
  const dispatch = useDispatch()
  return (
    <Frame>
      <Button text='ResetBoard' onClick={() => dispatch(resetBoard(4))} />
    </Frame>
  )
}

export default ButtonHolder
