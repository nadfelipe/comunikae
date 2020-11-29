import React, { Component } from 'react'
import './Configuracoes.css';
import Nav from '../../components/Nav/Nav'

export default class Configuracoes extends Component {
  render(){
    return (
      <div className="Configuracoes">
        <Nav setar='fora-home' config={true}></Nav>
        <p>Configuracoes</p>
      </div>
    );
  }
}

