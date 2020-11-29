import React, { Component } from 'react'
import './Home.css';
import Nav from '../../components/Nav/Nav'

export default class Home extends Component{
render(){
    return (
      <div className="Home">
        <Nav setar='home'></Nav>
        <div className='secoes-home'>
          <section id='sobre'>teste seção sobre</section>
          <section id='desafios-missao'>teste seção desafios e missao</section>
          <section id='manual'>teste seção manual</section>
          <section id='classes'>teste seção classes</section>
        </div>
      </div>
    );
  }
}

