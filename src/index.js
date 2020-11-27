import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import App from './App';
import Home from './pages/home/home.js'
import Mural from './pages/mural/mural.js'
import reportWebVitals from './reportWebVitals';

const Routes = (
  <Router basename={process.env.PUBLIC_URL}>
    <div>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/mural' component={Mural}/>
      </Switch>
    </div>
  </Router>
)

ReactDOM.render( Routes , document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
