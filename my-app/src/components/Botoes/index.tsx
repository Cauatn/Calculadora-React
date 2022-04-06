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
    font-size: 24px;
    text-align: center;
    font-weight: 400;

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

const digitos = [7,8,9,4,5,6,1,2,3,0,'.'];

const operadores = ['/', 'x', '-', '+', '='];

const extra = ['C', '+/-', '%'];

export default function BotaoContainer({tipo} : Props) {

    const DigitosMap = digitos.map((digito, key) => {
        return <Button 
                    tipo={'primary'}
                    key={key}
                    onClick={() => {}}
                    >
                {digito}
                </Button>
    })

    const OperadoresMap = operadores.map((operador, key) => {
        return <Button
                    tipo={'secundary'}
                    key={key}
                    onClick={() => {}}
                >
                {operador}
                </Button>
    })

    const ExtraMap = extra.map((extra, key) => {
        return <Button
                    tipo={'terciary'}
                    key={key}
                    onClick={() => {}}
                > 
                {extra} 
                </Button>
    })

    function tipoBotao() {
        if (tipo === 'numero') { return DigitosMap }
        if (tipo === 'operadores') { return OperadoresMap }
        if (tipo === 'extra') { return ExtraMap }
    }

    return(
        <> { tipoBotao() } </>
    )
}