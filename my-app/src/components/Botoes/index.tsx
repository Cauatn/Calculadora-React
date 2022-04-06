import { Value } from "sass";
import styled from "styled-components";

interface Props {
    tipo : String
}

const Button = styled.button<Props>`
    cursor: pointer;
    width: 60px;
    height: 60px;
    color : #FFFFFF;
    border-radius: 100%;

    background-color: ${props => {
        if (props.tipo === 'primary') {
            return '#323232';
        }
        if (props.tipo === 'secundary') {
            return '#800080'
        }
        if (props.tipo === 'terciary') {
            return '#b4b4b4'
        }
    }};
`

const digitos = ['.',0,1,2,3,4,5,6,7,8,9];

const operadores = ['=', '+', '-', 'x', '/'];

const extra = ['C', '+/-', '%'];

export function tipoBotao(tipo : Props) {

    const DigitosMap = digitos.map((digito, key) => {
        return <Button tipo={'primary'} key={key}> {digito} </Button>
    })

    const OperadoresMap = operadores.map((operador, key) => {
        return <Button tipo={'secundary'} key={key}> {operador} </Button>
    })

    const ExtraMap = extra.map((extra, key) => {
        return <Button tipo={'terciary'} key={key}> {extra} </Button>
    })
}