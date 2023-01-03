import { useDispatch, useSelector } from 'react-redux'
import { getCardById, getCurrentPlayer } from '../../resources/helpers/redux.helpers'
import { moveCard } from '../../resources/reducers/cards'
import { Frame, Title, Img, Text } from './style'

export { useSelector } from 'react-redux'

const CardDisplayer = ({
  id = 1
}) => {
  const card = useSelector(state => getCardById(state, id))
  const currentPlayer = useSelector(state => getCurrentPlayer(state))
  const dispatch = useDispatch()
  const MoveToPlayer = () => {
    if (card.location === 'deck') {
      dispatch(moveCard(card.id, currentPlayer))
    }
  }
  return (
    <Frame onClick={() => MoveToPlayer()}>
      <Title>{card.name}</Title>
      <Img alt={card.name} src={process.env.PUBLIC_URL + '/img/' + card.img} />
      <Text>{card.text}</Text>
    </Frame>
  )
}

export default CardDisplayer
