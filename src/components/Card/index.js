import DefaultPicture from '../../assets/profile.png'
import PropTypes from 'prop-types'
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

function Card({ label, title, picture }) {
  return (
    <CardWrapper>
      <CardLabel>{label}</CardLabel>
      <CardImage src={picture || DefaultPicture} alt="freelance" />
      <span>{title}</span>
    </CardWrapper>
  )
}

Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string, // La prop picture n'est plus requise
}

Card.defaultProps = {
  label: '',
  title: '',
  picture: DefaultPicture, // On utilise l'image par défaut si aucune image n'est fournie
}

export default Card
