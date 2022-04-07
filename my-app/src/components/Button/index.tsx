import styled from "styled-components"

interface Props {
    valor : string | number,
    className : string,
    onclick : Function
}

const Botao = styled.button`
    border: none;
    background-color: rgb(80, 60, 209);
    font-size: 24px;
    color: rgb(255, 255, 255);
    font-weight: bold;
    cursor: pointer;
    border-radius: 10px;
    outline: none;
`

export default function Button({valor, className, onclick} : Props) {
    return (
        <Botao>
            { valor }
        </Botao>
    )
}