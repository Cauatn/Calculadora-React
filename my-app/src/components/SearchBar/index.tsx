import { useState } from "react"
import styled from "styled-components"

interface Props {
    onSearch : Function
}

const Container = styled.div `
    display: flex;
    align-items: center;
`

const SearchBarContainer = styled.div `
    background-color: #f8f8ff;
    width: 160px;
    height: 40px;
    
`
const Button = styled.button `
    color : #FFFFFF;
    background-color: #454545;
    border: none;
    width: 160px;
    height: 40px;
    border-radius: 20px;
`

const Search = styled.input ``

export default function SearchBar(props : any) {

    const {onSearch} = props
    const [search, setSearch] = useState('');

    const onChangeHandler = (e : any) => {
        setSearch(e.target.value)
    }

    const onButtonClickHandler = () => {
        const pokemon = onSearch(search)
    }

    return (
        <Container>
            <SearchBarContainer>
                <Search type="text" placeholder='Buscar Pokemon' onChange={onChangeHandler}/>
            </SearchBarContainer>
            <Button onClick={onButtonClickHandler} >Pesquisar pokemon </Button>
        </Container>
    )
}