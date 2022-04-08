import React from 'react';
import styled from 'styled-components'
import './App.css';
import SearchBar from '../components/SearchBar';
import {searchPokemon} from '../api'

let LogoImg = require('../assets/img/logo.png');

const Logo = styled.img`
    width: 220px;
`

function App() {

  const onSearchHandler = async (pokemon : any) => {
    const result = await searchPokemon(pokemon)
    console.log('',result)
  }

  return (
    <div className="App">
      <Logo src={LogoImg} alt="Pokemon Logo" />
      <SearchBar
        onSearch={onSearchHandler}
      />
    </div>
  );
}

export default App;
