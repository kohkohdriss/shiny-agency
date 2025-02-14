import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'
import Home from './pages/Home'
import Survey from './pages/Survey/index'
import Header from './components/Header'
import ClientForm from './components/ClientForm'
import FreelanceForm from './components/FreelanceForm'
import Error from './components/Error'
import Freelances from './pages/Freelances'
import { createGlobalStyle } from 'styled-components' // Import de createGlobalStyle

// Déclaration de GlobalStyle avant son utilisation
const GlobalStyle = createGlobalStyle`
    div {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
        
    }
`

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey/:questionNumber" element={<Survey />}>
          <Route path="client" element={<ClientForm />} />
          <Route path="freelance" element={<FreelanceForm />} />
        </Route>
        <Route path="*" element={<Error />} />
        <Route path="/freelances" element={<Freelances />} />
      </Routes>
    </Router>
  </React.StrictMode>
)

// Si tu veux commencer à mesurer la performance dans ton application,
// passe une fonction pour enregistrer les résultats
// (par exemple : reportWebVitals(console.log))
// ou envoie-les à un endpoint d'analyse.
reportWebVitals()
