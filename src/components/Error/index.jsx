function Error() {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#ffebeb',
    color: '#333',
    textAlign: 'center',
    padding: '20px',
    animation: 'fadeIn 1s ease-out',
  }

  const contentStyle = {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '90%',
    maxWidth: '500px',
  }

  const titleStyle = {
    fontSize: '3rem',
    color: '#e74c3c',
    margin: '0',
  }

  const textStyle = {
    fontSize: '1.25rem',
    marginTop: '10px',
    color: '#555',
  }

  const buttonStyle = {
    display: 'inline-block',
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '1rem',
    color: 'white',
    backgroundColor: '#3498db',
    textDecoration: 'none',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  }

  const buttonHoverStyle = {
    backgroundColor: '#2980b9',
  }

  const fadeIn = {
    animation: 'fadeIn 1s ease-out',
  }

  return (
    <div style={containerStyle}>
      <div style={{ ...contentStyle, ...fadeIn }}>
        <h1 style={titleStyle}>Oups 🙈</h1>
        <p style={textStyle}>Cette page n'existe pas</p>
        <a
          href="/"
          style={buttonStyle}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor =
              buttonHoverStyle.backgroundColor)
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = '#3498db')
          }
        >
          Retour à l'accueil
        </a>
      </div>
    </div>
  )
}

export default Error
