import { useSelector } from 'react-redux'
import { getCardById } from '../../resources/helpers/redux.helpers'

export { useSelector } from 'react-redux'

const CardDisplayer = ({
  id = 1
}) => {
  const card = useSelector(state => getCardById(state, id))
  return (
    <p>{card.id + ' ' + card.name + ' ' + card.text + ' ' + card.img}</p>
  )
}

export default CardDisplayer
