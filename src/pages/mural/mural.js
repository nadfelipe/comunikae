import React, { Component } from 'react'
import './Mural.css';
import Nav from '../../components/Nav/Nav'

export default class Mural extends Component{
  render(){
    return (
      <div className="Mural">
        <Nav setar='fora-home' mural={true}></Nav>
        <p>mural</p>
      </div>
    );
  }
}

