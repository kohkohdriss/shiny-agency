import DefaultPicture from '../../assets/profile.png'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const CardLabel = styled.span`
  color: #5843e4;
  font-size: 22px;
  font-weight: bold;
  display: flex;
  text-align: center;
`

const CardImage = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 50%;
`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  justify-content: center; /* Centre verticalement */
  align-items: center; /* Centre horizontalement */
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  width: 12em;
  height: 12em;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
  .classNameCard& {
    background: orange;
  }
`

// Here, I used TypeScript to type the props 'label', 'title', and 'picture'.
interface CardProps {
  label: string
  title: string
  picture?: string
}

function Card({ label, title, picture }: CardProps) {
  return (
    <CardWrapper>
      <CardLabel>{label}</CardLabel>
      <CardImage src={picture || DefaultPicture} alt="freelance" />
      <span>{title}</span>
    </CardWrapper>
  )
}

export default Card
