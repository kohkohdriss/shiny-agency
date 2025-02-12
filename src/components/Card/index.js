import DefaultPicture from '../assets/profile.png'
import PropTypes from 'prop-types'

function Card({ label, title, picture }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: 15 }}>
      <span>{label}</span>
      <img
        src={picture || DefaultPicture}
        alt="freelance"
        height={80}
        width={80}
      />
      <span>{title}</span>
    </div>
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
