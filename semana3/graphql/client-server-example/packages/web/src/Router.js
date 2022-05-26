import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Signin from './pages/Signin';

export default function Router() {
    return (
    <BrowserRouter>
        <Routes>
            <Route path='/' exact element={<Home/>} />
            <Route path="/sign-in" element={<Signin/>} />
        </Routes>
    </BrowserRouter>
    )
}