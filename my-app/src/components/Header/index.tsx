import styled from 'styled-components'


let LogoImg = require('../assets/img/logo.png');

const Logo = styled.img`
    width: 220px;
`

const Header = styled.header `
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export default function PokeApi() {

    return (
                <Header>
                    <Logo src={LogoImg} alt="Pokemon Logo" />
                </Header>
    )
}