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
              <div className='banner-textos'>
                <h1 className='banner-h1'>Um espaço <span className='banner-h1-span1'/>para aprender<span className='banner-h1-span2'/>, interagir <span className='banner-h1-span3'/>e competir <span className='banner-h1-span4'/>juntos</h1>
                <p className='banner-p'>O Comunikaê transforma o processo de comunicação dentro das escolas, <br/> proporcionando uma maior interação e cooperação entre os alunos para realizar desafios.</p>
              </div>
              <img className='banner-simbolo' src={Simbolo} alt='Símbolo Comunikaê'/>
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
