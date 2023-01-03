import { Board, Hand } from './style'
import SocketDisplayer from '../SocketDisplayer'
import PlayerCardsDisplayer from '../PlayerCardsDisplayer'

const PlayerBoard = ({ id = 'player-top' }) => {
  return (
    <Board id={id}>
      <Hand id={id}>
        <SocketDisplayer
          posX={id === 'player-top' ? 67 : 0}
          posY={0}
          location={id + '-first'}
          width='33%'
          height='100%'
        />
        <SocketDisplayer
          posX={33}
          posY={0}
          location={id + '-second'}
          width='34%'
          height='100%'
        />
        <SocketDisplayer
          posX={id === 'player-top' ? 0 : 67}
          posY={0}
          location={id + '-last'}
          width='33%'
          height='100%'
        />
      </Hand>
      <PlayerCardsDisplayer id={id} />
    </Board>
  )
}

export default PlayerBoard
