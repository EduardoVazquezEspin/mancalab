import { useSelector } from 'react-redux'
import { getCardById } from '../../resources/helpers/redux.helpers'
import { Frame, Title, Img, Text } from './style'

export { useSelector } from 'react-redux'

const CardDisplayer = ({
  id = 1
}) => {
  const card = useSelector(state => getCardById(state, id))
  return (
    <Frame>
      <Title>{card.name}</Title>
      <Img alt={card.name} src={process.env.PUBLIC_URL + '/img/' + card.img + '.png'} />
      <Text>{card.text}</Text>
    </Frame>
  )
}

export default CardDisplayer
