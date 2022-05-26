import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import logo from '../../components/logo.svg';
import './style.css';

export default function Repositories(){
    const navigate = useNavigate();
    const [ repositories, setRepositories ] = useState([]);
    const username = localStorage.getItem('username');
    
    useEffect(() => {
        let repositoriesName = localStorage.getItem('repositoriesName');
        if(repositoriesName !== null){
            repositoriesName = JSON.parse(repositoriesName)
            setRepositories(repositoriesName);
        }else{
            localStorage.clear();
            navigate('/');
        }
        
    }, []);
    
   
    return(
        <>
        <nav>
            <span className='logoHC'> <img src={logo} alt='logo' width='100px' />Hiring Coders - Week 3</span>
            <span><Link to='/' className="search">Search again</Link></span>
        </nav>

        <main>
            <div className="container">
                <div className="title">
                    Repositores from <b>{username}</b>:
                </div>
                <div className="repositories">
                    {repositories.map(repository=>{
                        return (
                            <div>{ repository }</div>
                        )
                    })}
                </div>
            </div>  
        </main>
        </>
    )
}
