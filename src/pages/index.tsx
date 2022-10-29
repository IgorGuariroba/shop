import { styled } from "../styles"

const Button = styled('button',{
  backgroundColor: 'Purple',
  color: 'white',
  border: 0,
  padding: '0.5rem 1rem',
})


export default function Home() {
  return (
    <Button>Enviar</Button>
  )
}
