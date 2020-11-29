import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './Login.css';

export default class Login extends Component{
  render(){
    return (
      <div className="Login">
        <Link to="/">voltar</Link>
        <p>Login</p>
        <Link to="/mural">Acessar</Link>
      </div>
    );
  }
}

