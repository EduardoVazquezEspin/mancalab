import { ButtonStyled } from './style'

const Button = ({ text, onClick }) => {
  return <ButtonStyled onClick={onClick}>{text}</ButtonStyled>
}

export default Button
