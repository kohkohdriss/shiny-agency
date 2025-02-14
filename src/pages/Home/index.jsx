import styled from 'styled-components'
import { useState } from 'react'

const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const Ballon = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background-color: red; /* Retirer les guillemets */
  transform: scale(${({ size }) => size});
`

function Home() {
  const [size, setSize] = useState(1)

  return (
    <HomeContainer>
      <h1 onClick={() => setSize(size + 0.1)}>Page d'accueil 🏡</h1>
      <Ballon size={size} />
    </HomeContainer>
  )
}

export default Home
