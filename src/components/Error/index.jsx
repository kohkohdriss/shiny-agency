import pageError from '../../assets/page-found.avif'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const ErrorWrapper = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.background};
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

const ErrorTitle = styled.h1`
  font-weight: 600;
  font-size: 48px;
  color: ${colors.primary};
  margin-bottom: 20px;
`

const ErrorSubtitle = styled.h2`
  font-weight: 300;
  color: ${colors.secondary};
  font-size: 24px;
  margin-bottom: 30px;
`

const Illustration = styled.img`
  max-width: 100%;
  height: auto;
  margin-top: 20px;
`

const Error = () => {
  return (
    <ErrorWrapper>
      <ErrorTitle>Oops, quelque chose s'est mal passé !</ErrorTitle>
      <ErrorSubtitle>
        Nous n'avons pas pu trouver la page que vous cherchez.
      </ErrorSubtitle>
      <Illustration src={pageError} alt="Page not found illustration" />
    </ErrorWrapper>
  )
}

export default Error
