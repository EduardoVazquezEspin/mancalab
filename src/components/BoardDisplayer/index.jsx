import { useSelector } from 'react-redux'
import { getBridge } from '../../resources/helpers/redux.helpers'
import SocketDisplayer from '../SocketDisplayer'
import { Board, Bridge } from './style'

const BoardDisplayer = () => {
  const bridge = useSelector(state => getBridge(state))
  return (
    <Board>
      <SocketDisplayer posX={0} posY={0} location='player-top-store' width='12.5%' height='100%' />
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
      <SocketDisplayer posX={87.5} posY={0} location='player-bottom-store' width='12.5%' height='100%' />
      {bridge === -1 ? <div /> : <Bridge posX={12.5 * (bridge + 1)} posY={45} />}
    </Board>
  )
}

export default BoardDisplayer
