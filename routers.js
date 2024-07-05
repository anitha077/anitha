import React from 'react';
import {BrowserRouter,Route,Routes,Link}from 'react-router-dom';
import Registration from './Routers/Registration';
import Login from './Routers/Login';
import Signup from '.Routers/Signup';
import Layout from './Routers/Layout';
import useEffect from './fourth';
import UseEffect from './useeffect';
function App(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={Registration />}/>
                <Route path="login"element={<Login />}/>
                <Route path="*"element={<Signup />}/>
            </Route>
            </Routes>
            </BrowserRouter>
    )
}