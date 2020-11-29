import React, { Component } from 'react'
import './Home.css';
import Nav from '../../components/Nav/Nav'

export default class Home extends Component{
render(){
    return (
      <div className="Home">
        <Nav setar='menu'></Nav>
        <p>home</p>
        <section id='sobre'>a</section>
        <section id='desafios-missao'>a</section>
        <section id='manual'>a</section>
        <section id='classes'>a</section>
      </div>
    );
  }
}

