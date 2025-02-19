<<<<<<< HEAD
// Here, I used TypeScript to type the props 'label', 'title', and 'picture'.
=======
>>>>>>> 397408b417be94957a99b9547a403336d97e6977
interface CardProps {
  label: string
  title: string
  picture: string
}

function Card({ label, title, picture }: CardProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: 15 }}>
      <span>{label}</span>
      <img src={picture} alt="freelance" height={80} width={80} />
      <span>{title}</span>
    </div>
  )
}

export default Card
