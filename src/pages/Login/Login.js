import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './Login.css';

export default class Login extends Component{
  render(){
    return (
      <div className="Login">
        <div className='login-content'>
          <div className='btn-voltar'>
          <Link to="/">voltar</Link>
          </div>
          <div className='content-login'>
            <h1 className='login-h1'>Login</h1>
            <div className='login-form-container'>
              <form id='form-login' className='form-login' action=''>
                <div className='input-container'>
                  <input id='number' type='text' pattern='.+' className='input-login' required/>
                  <label for='number' >Identificação individual</label>
                </div>
                <div className='input-container'>
                  <input id='senha' type='password' pattern='.+' className='input-login' required/>
                  <label for='senha'>Senha</label>
                </div>
              </form>
              
              <Link to="/mural">
                Acessar
                <button type='submit' form='form-login' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

