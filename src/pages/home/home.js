import React, { Component } from 'react'
import './Home.css';
import Nav from '../../components/Nav/Nav'
import VNav from '../../components/VerticalNav/VerticalNav'
import Simbolo from '../../assets/img/comunikae_simbolo.svg'
import ImgSecao2 from '../../assets/img/imagem-secao-2.png'

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
          <section id='sobre'>
            <div className='content-sobre'>
              <div className='sobre-textos'>
                <h2 className='sobre-h2'>Uma plataforma de gamificação virtual, para incentivar desafios reais nas escolas</h2>
                <p className='sobre-p'>Queremos melhorar  a interação na escola, estimulando a comunicação, o compartilhamento de projetos, ideias e desafios de forma integrada. Compartilhe o que sua equipe produziu, interaja, conquiste recompensas e pontue cada vez mais.</p>
              </div>
              <img className='sobre-img' src={ImgSecao2} alt='Cards de desafio e pontuação da equipe'/>
            </div>
          </section>
          <section id='desafios-missao'>teste seção desafios e missao</section>
          <section id='manual'>teste seção manual</section>
          <section id='classes'>teste seção classes</section>
        </div>
      </div>
    );
  }
}
