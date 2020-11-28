import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import App from './App';
import Home from './pages/Home/Home.js'
import Login from './pages/Login/Login.js'
import Mural from './pages/Mural/Mural.js'
import Explorar from './pages/Explorar/Explorar.js'
import Config from './pages/Configuracoes/Configuracoes.js'
import Perfil from './pages/Perfil/Perfil.js'
import reportWebVitals from './reportWebVitals';

const Routes = (
  <Router basename={process.env.PUBLIC_URL}>
    <div>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/login' component={Login}/>        
        <Route exact path='/mural' component={Mural}/>
        <Route exact path='/explorar' component={Explorar}/>
        <Route exact path='/config' component={Config}/>
        <Route exact path='/perfil' component={Perfil}/>
      </Switch>
    </div>
  </Router>
)

ReactDOM.render( Routes , document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
