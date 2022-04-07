import styled from 'styled-components'

const Container = styled.div`
    width: 340px;
    height: 540px;
    padding: 10px;
    border-radius: 10px;
    background-color: #485461;
    background-image: linear-gradient(315deg, #485461 0%, #28313b 74%);
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
        </Container>
    )
}