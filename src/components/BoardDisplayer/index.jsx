import SocketDisplayer from '../SocketDisplayer'
import { Board } from './style'

const BoardDisplayer = () => {
  return (
    <Board>
      <SocketDisplayer posX={0} posY={0} location='player-top' width='12.5%' height='100%' />
      {[...Array(6).keys()].map(it =>
        <SocketDisplayer
          key={it} posX={12.5 + it * 12.5} posY={0}
          location={it} width='12.5%' height='50%'
        />
      )}
      {[...Array(6).keys()].map(it =>
        <SocketDisplayer
          key={it + 6} posX={12.5 + it * 12.5} posY={50}
          location={it + 6} width='12.5%' height='50%'
        />
      )}
      <SocketDisplayer posX={87.5} posY={0} location='player-bottom' width='12.5%' height='100%' />
    </Board>
  )
}

export default BoardDisplayer
