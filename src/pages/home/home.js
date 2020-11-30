import React, { Component } from 'react'
import './Home.css';
import Nav from '../../components/Nav/Nav'
import VNav from '../../components/VerticalNav/VerticalNav'
import Simbolo from '../../assets/img/comunikae_simbolo.svg'

export default class Home extends Component{
render(){
    return (
      <div className="Home">
        <Nav setar='home'></Nav>
        <VNav></VNav>
        <div className='secoes-home'>
          <section id='banner'>
            <div className='content-banner'>
              <h1>Um espaço para aprender, interagir e competir juntos</h1>
              <p>O Comunikaê transforma o processo de comunicação dentro das escolas, proporcionando uma maior interação e cooperação entre os alunos para realizar desafios.</p>
              <img src={Simbolo} alt='Símbolo Comunikaê'/>
            </div>
          </section>
          <section id='sobre'>teste seção sobre</section>
          <section id='desafios-missao'>teste seção desafios e missao</section>
          <section id='manual'>teste seção manual</section>
          <section id='classes'>teste seção classes</section>
        </div>
      </div>
    );
  }
}
