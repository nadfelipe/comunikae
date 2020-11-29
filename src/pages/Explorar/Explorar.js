import React, { Component } from 'react'
import './Explorar.css';
import Nav from '../../components/Nav/Nav'

export default class Explorar extends Component {
  render(){
    return (
      <div className="Explorar">
        <Nav setar='fora-home' explorar={true}></Nav>
        <p>Explorar</p>
      </div>
    );   
  }
}

