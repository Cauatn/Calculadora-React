import styled from 'styled-components'
import Calculadora from '../Calculadora'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 460px;
`

const Titulo = styled.h1 `
    font-size : 2.4em;

`

const Texto = styled.p `
    font-size : 1.2em;
`


export default function CalculadoraContainer() {
    return(
        <Container>
            <Titulo>Calculadora em React</Titulo>
            <Texto>Calculadora simples em react, para aprender Hooks</Texto>
            <Calculadora />
        </Container>
    )
}