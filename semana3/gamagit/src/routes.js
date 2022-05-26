import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Repositories from './pages/Repositories';

export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>

                <Route path='/' exact element={<Home />} />
                <Route path='/repositories/' element={<Repositories />} />
                
            </Routes>
        </BrowserRouter>
    )
}