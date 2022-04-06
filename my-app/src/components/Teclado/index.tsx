import styled from "styled-components"
import BotaoContainer from "../Botoes"

const TecladoContainer = styled.div`
    background-color: #1c191c;
`

const NumerosContainer = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`

const OperadoresContainer = styled.div `
`

const ExtraContainer = styled.div `
`

export default function Teclado() {
    
    return (
        <TecladoContainer> 
            <NumerosContainer>
                <BotaoContainer tipo={'numero'}/>
            </NumerosContainer>
            <OperadoresContainer> 
                <BotaoContainer tipo={'operadores'}/>
            </OperadoresContainer>
            <ExtraContainer>
                <BotaoContainer tipo={'extra'}/>
            </ExtraContainer>
        </TecladoContainer>
    )
}