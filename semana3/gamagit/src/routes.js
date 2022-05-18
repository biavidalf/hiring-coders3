import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './Home';
import Repositories from './Repositories';

export default function Routes(){
    return(
        <BrowserRouter>
            <Routes>

                <Route path='/' exact element={<Home/>} />
                <Route path='/repositories' element={<Repositories/>} />
                
            </Routes>
        </BrowserRouter>
    )
}