import { useSelector } from 'react-redux'
import { getCardsFilter } from '../../resources/helpers/redux.helpers'
import CardDisplayer from '../CardDisplayer'
import { Frame } from './style'

const CardHolder = () => {
  const deckCards = useSelector(state => getCardsFilter(state, { location: 'deck' }))
  return (
    <Frame>
      {deckCards.map((card, it) => <CardDisplayer key={it} id={card.id} />)}
      <CardDisplayer id={1} />
      <CardDisplayer id={1} />
      <CardDisplayer id={1} />
      <CardDisplayer id={1} />
    </Frame>
  )
}

export default CardHolder
