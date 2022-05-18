import React, { useState } from 'react';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';

function Home(props) {
  const [ usuario, setUsuario ] = useState('');
  
  function handlePesquisa(){
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => console.log(response.data));
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt='logo' />
        <h1>Semana {props.semana} - React Básico</h1>

        <input value={usuario} onChange={e => setUsuario(e.target.value)} id='user' className='user-input' placeholder='Nome de Usuário' />
        <button onClick={handlePesquisa} type='button' className='user-button'>Pesquisar</button>
      </header>
    </div>
  );
}

export default Home;
