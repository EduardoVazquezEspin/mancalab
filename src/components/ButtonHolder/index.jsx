import { useState } from 'react'
import Select from 'react-select'
import { useDispatch, useSelector } from 'react-redux'
import { resetBoard, flipTheBoard } from '../../resources/reducers/seeds'
import { Frame, DieDisplay } from './style'
import Button from '../Button'
import { getCurrentPlayer, getNumberOfSeedsPerSocket } from '../../resources/helpers/redux.helpers'
import { changeNumberOfSeeds, swapPlayers, changeCursorMode } from '../../resources/reducers/gameState'

const ResetBoard = () => {
  const dispatch = useDispatch()
  const numberOfSeeds = useSelector(state => getNumberOfSeedsPerSocket(state))
  return <Button text='ResetBoard' onClick={() => dispatch(resetBoard(numberOfSeeds))} />
}

const DieDisplayer = ({ numberOfSides }) => {
  const [dieState, setDieState] = useState('')
  return (
    <>
      <Button text={'1D' + numberOfSides} onClick={() => setDieState(1 + Math.floor(Math.random() * numberOfSides))} />
      <DieDisplay>{dieState}</DieDisplay>
    </>
  )
}

const SeasonDisplayer = () => {
  const options = [
    { value: 0, label: 'Winter' },
    { value: 1, label: 'Spring' },
    { value: 2, label: 'Summer' },
    { value: 3, label: 'Fall' }
  ]
  return (
    <Select options={options} placeholder='Season' components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }} />
  )
}

const SwapPlayersButton = () => {
  const currentPlayer = useSelector(state => getCurrentPlayer(state))
  const dispatch = useDispatch()
  return (
    <>
      <Button text='Change Player' onClick={() => dispatch(swapPlayers())} />
      <DieDisplay>{currentPlayer}</DieDisplay>
    </>
  )
}

const ChangeSeeds = ({ value = 0 }) => {
  const dispatch = useDispatch()
  const ChangeNumberOfSeeds = () => {
    dispatch(changeNumberOfSeeds(value))
  }
  return <Button onClick={ChangeNumberOfSeeds} text={(value > 0 ? '+' : '') + value + ' seed ALL'} />
}

const CursorOptions = () => {
  const options = [
    { value: 0, label: 'Select' },
    { value: 1, label: 'Add Seed' },
    { value: 2, label: 'Remove Seed' },
    { value: 3, label: 'Bridge' },
    { value: 4, label: 'Pocket State' }
  ]
  const dispatch = useDispatch()
  const updateCursorMode = (newMode) => {
    dispatch(changeCursorMode(newMode.label))
  }
  return (
    <Select
      options={options}
      defaultValue={0}
      placeholder='Cursor'
      components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
      onChange={(choice) => updateCursorMode(choice)}
    />
  )
}

const FlipBoard = () => {
  const dispatch = useDispatch()
  return (
    <Button
      text='Flip the Board'
      onClick={() => dispatch(flipTheBoard())}
    />
  )
}

const ButtonHolder = () => {
  console.log(useSelector(state => state))
  return (
    <Frame>
      <ResetBoard />
      <DieDisplayer numberOfSides={4} />
      <DieDisplayer numberOfSides={6} />
      <SeasonDisplayer />
      <SwapPlayersButton />
      <ChangeSeeds value={1} />
      <ChangeSeeds value={-1} />
      <CursorOptions />
      <FlipBoard />
    </Frame>
  )
}

export default ButtonHolder
