import { useState } from 'react';
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

const Button = styled.button `
    color : #FFFFFF;
    background-color: #454545;
    border: none;
    width: 160px;
    height: 40px;
    border-radius: 20px;
`

const SearchBarContainer = styled.div `
    background-color: #f8f8ff;
    width: 160px;
    height: 40px;
    
`

const SearchBar = styled.input `
    
`

const Container = styled.div `
    display: flex;
    align-items: center;
`

export default function PokeApi() {

    const [search, setSearch] = useState('');

    const onChangeHanlder = (e : any) => {
        console.log(e.target.value)
        setSearch(e.target.value)
    }

    return (
                <Header>
                    <Logo src={LogoImg} alt="Pokemon Logo" />
                   <Container>
                        <SearchBarContainer>
                            <SearchBar type="text" placeholder='Buscar Pokemon' onChange={onChangeHanlder}/>
                        </SearchBarContainer>
                        <Button>Pesquisar pokemon</Button>
                    </Container>
                </Header>
    )
}