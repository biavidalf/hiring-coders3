import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import logo from '../../components/logo.svg';
import '../../components/App.css';

function Home() {
  const navigate = useNavigate();
  const [ usuario, setUsuario ] = useState('');
  const [ erro, setErro ] = useState(false);
  
  function handlePesquisa(){
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {
      const repositories = response.data;
      const repositoriesName = [];
      repositories.map((repository) => {
        repositoriesName.push(repository.name);
      });
      
      setErro(false);

      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
      localStorage.setItem('username', usuario);
      navigate('/repositories');
    }).catch(err => {
      setErro(true);
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt='logo' />
        <h1>Semana 3 - React</h1>

        <p>Digite um usuário do github:</p>
        <input value={usuario} onChange={e => setUsuario(e.target.value)} id='user' className='user-input' placeholder='Nome de Usuário' />
        <button onClick={handlePesquisa} type='button' className='user-button'>Pesquisar</button>
      
      { erro ? <span className='erro'>Ocorreu um erro!</span> : ''}
      
      </header>
    </div>
  );
}

export default Home;
