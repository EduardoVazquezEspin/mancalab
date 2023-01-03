import { useSelector } from 'react-redux'
import { getCardsFilter } from '../../resources/helpers/redux.helpers'
import { CardsDisplayer } from './style'
import CardDisplayer from '../CardDisplayer'

const PlayerCardsDisplayer = ({ id }) => {
  const cards = useSelector(state => getCardsFilter(state, { location: id }))
  return (
    <CardsDisplayer id={id}>
      {cards.map((card, it) => <CardDisplayer key={it} id={card.id} />)}
    </CardsDisplayer>
  )
}

export default PlayerCardsDisplayer
