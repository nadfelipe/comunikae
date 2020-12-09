import React, { Component } from 'react'
import './Perfil.css';
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer.js'

export default class Perfil extends Component{
  render(){
    return (
      <div className="Perfil">
        <Nav setar='fora-home' perfil={true}></Nav>
        <p>Perfil</p>
        <Footer/>
      </div>
    );
  }
}

