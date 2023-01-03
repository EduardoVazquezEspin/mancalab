import BoardDisplayer from '../BoardDisplayer'
import MenuDisplayer from '../MenuDisplayer'
import PlayerBoard from '../PlayerBoard'

const Mancalapp = () => {
  return (
    <>
      <PlayerBoard id='player-top' />
      <BoardDisplayer />
      <PlayerBoard id='player-bottom' />
      <MenuDisplayer />
    </>
  )
}

export default Mancalapp
