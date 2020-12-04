import React, { Component } from 'react'
import './Home.css';
import Nav from '../../components/Nav/Nav.js'
import VNav from '../../components/VerticalNav/VerticalNav.js'
import Manual from '../../components/Manual/Manual.js'
import Classes from '../../components/Classe/Classe.js'
import Footer from '../../components/Footer/Footer.js'
import Simbolo from '../../assets/img/comunikae_simbolo.svg'
import ImgSecao2 from '../../assets/img/imagem-secao-2.png'
import ImgSecao3 from '../../assets/img/imagem-secao-3.png'


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
                <h2 className='home-h2'>Uma plataforma de gamificação virtual, para incentivar desafios reais nas escolas</h2>
                <p className='home-p'>Queremos melhorar  a interação na escola, estimulando a comunicação, o compartilhamento de projetos, ideias e desafios de forma integrada. Compartilhe o que sua equipe produziu, interaja, conquiste recompensas e pontue cada vez mais.</p>
              </div>
              <img className='sobre-img' src={ImgSecao2} alt='Cards de desafio e pontuação da equipe'/>
            </div>
          </section>
          <section id='desafios-missao'>
            <div className='content-dm'>
              <div className='dm-textos'>
                <h2 className='home-h2'>Se desafie, desafie seus amigos, entre na competição contra outras equipes, coopere, pontue, conquiste.</h2>
                <p className='home-p'>Os desafios serão criativos, lógicos e até estratégicos, além de alguns serem integrados com suas matérias, tornando o aprendizado mais dinâmico e interessante, tudo para estimular a conexão com você e sua equipe e até para facilitar sua comunicação com os professores.</p>
              </div>
              <img className='dm-img' src={ImgSecao3} alt='Imagem do ranking'/>
            </div>
          </section>
          <section className='container-manual'>
            <div className='content-manual' id='manual'>
              <h2 className='home-h2'>Como funciona o jogo?</h2>
              <Manual />
            </div>
          </section>
          <section id='classes'>
            <div className='content-classes'>
              <h2 className='home-h2'>Classes</h2>
              <p className='home-p'>Olha que legal, você também pode personalizar sua imersão no jogo, sua equipe e você podem decidir entre quatro estéticas que vão personalizar o cartão de visita de vocês, a página da equipe, e você também pode personalizar só o seu, deixando com a sua cara.</p>
              <Classes />
            </div>
          </section>
        </div>
        <Footer/>
      </div>
    );
  }
}
