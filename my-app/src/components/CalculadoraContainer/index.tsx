import styled from 'styled-components'
import ButtonBox from '../ButtonBox'
import Tela from '../Tela'

const Container = styled.div`
    width: 340px;
    height: 540px;
    padding: 10px;
    border-radius: 10px;
    background-color: #485461;
    background-image: linear-gradient(315deg, #485461 0%, #28313b 74%);
`


export default function CalculadoraContainer() {
    return(
        <Container>
            <Tela />
            <ButtonBox />
        </Container>
    )
}