import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useState } from 'react'

const StyledLink = styled(Link)`
  padding: 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 20px; width:20px; height: 5px; background-color: #5843E4;`}
`

function Header() {
  const [activeLink, setActiveLink] = useState('') // Suivi du lien actif

  const handleLinkClick = (link) => {
    setActiveLink(link) // Mise à jour de l'état avec le lien cliqué
  }

  return (
    <nav>
      <StyledLink
        to="/"
        $isFullLink={activeLink === '/'}
        onClick={() => handleLinkClick('/')}
      >
        Accueil
      </StyledLink>
      <StyledLink
        to="/survey/1"
        $isFullLink={activeLink === '/survey/1'}
        onClick={() => handleLinkClick('/survey/1')}
      >
        Questionnaire
      </StyledLink>
      <StyledLink
        to="/results"
        $isFullLink={activeLink === '/results'}
        onClick={() => handleLinkClick('/results')}
      >
        Results
      </StyledLink>
      <StyledLink
        to="/freelances"
        $isFullLink={activeLink === '/freelances'}
        onClick={() => handleLinkClick('/freelances')}
      >
        Freelances
      </StyledLink>
    </nav>
  )
}

export default Header
