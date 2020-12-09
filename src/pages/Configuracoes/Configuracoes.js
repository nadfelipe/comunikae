import React, { Component } from 'react'
import './Configuracoes.css';
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer.js'

export default class Configuracoes extends Component {
  render(){
    return (
      <div className="Configuracoes">
        <Nav setar='fora-home' config={true}></Nav>
        <p>Configuracoes</p>
        <Footer/>
      </div>
    );
  }
}

