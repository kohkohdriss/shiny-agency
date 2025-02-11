import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav>
      <Link to="/">Accueil</Link>&nbsp;&nbsp;
      <Link to="/survey/42">Questionnaire</Link>&nbsp;&nbsp;
      <Link to="/results">Results</Link>&nbsp;&nbsp;
      <Link to="/freelances/54">Freelances</Link>&nbsp;&nbsp;
    </nav>
  )
}

export default Header
