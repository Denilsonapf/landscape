import {BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import Cadastrar from './pages/cadastrar';




export default function Routes(){
    return(

        
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Cadastrar}/>
            </Switch>
        </BrowserRouter>

        
    )
}