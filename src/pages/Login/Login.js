import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Login.css';
import AcessarBtnIcon from './../../assets/img/start_btn.svg'
import VoltarBtnIcon from './../../assets/img/start_btn2.svg'

export default class Login extends Component{
  render(){
    return (
      <div className='login-container'>
        <div className='Login'>
          <div className='login-content'>
            <div className='btn-voltar'>
              <Link to='/' className='btn-voltar-link'>
                <div className='btn-voltar-img'>
                  <img src={VoltarBtnIcon} alt=''/>
                </div>
                <p className='btn-voltar-p'>Voltar</p >              
              </Link>
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
                
                <Link to='/mural' className='btn-acessar-container'>
                  <button type='submit' form='form-login' className='btn-acessar'>
                    <p>Acessar</p>
                    <div className='btn-acessar-icon'>
                      <img src={AcessarBtnIcon} alt='Botão de login'/>
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

