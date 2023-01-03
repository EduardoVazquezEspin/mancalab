import { useState } from 'react'
import Select from 'react-select'
import { useDispatch } from 'react-redux'
import { resetBoard } from '../../resources/reducers/seeds'
import { Frame, DieDisplay } from './style'
import Button from '../Button'

const ResetBoard = () => {
  const dispatch = useDispatch()
  return <Button text='ResetBoard' onClick={() => dispatch(resetBoard(4))} />
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

const ButtonHolder = () => {
  return (
    <Frame>
      <ResetBoard />
      <DieDisplayer numberOfSides={4} />
      <DieDisplayer numberOfSides={6} />
      <SeasonDisplayer />
    </Frame>
  )
}

export default ButtonHolder
