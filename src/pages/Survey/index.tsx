import { useParams, Link } from 'react-router-dom'

function Survey() {
  const { questionNumber } = useParams<{ questionNumber: string | undefined }>()

  if (!questionNumber) {
    return <div>Erreur : le numéro de la question est introuvable.</div>
  }

  const questionNumberInt = parseInt(questionNumber)
  if (isNaN(questionNumberInt)) {
    return <div>Erreur : le numéro de la question est invalide.</div>
  }

  const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
  const nextQuestionNumber = questionNumberInt + 1

  return (
    <div>
      <h1>Questionnaire 🧮</h1>
      <h2>Question {questionNumber}</h2>
      <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link> <span></span>
      {questionNumberInt === 10 ? (
        <Link to="/results">Résultats</Link>
      ) : (
        <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
      )}
    </div>
  )
}

export default Survey
