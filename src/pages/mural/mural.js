import React, { Component } from 'react'
import './Mural.css';
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer.js'
import 'react-responsive-modal/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMedal, faBullhorn, faVectorSquare, faCheck, faPlus, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

export default class Mural extends Component{
  render(){
    return (
      <div className="Mural">
        <Nav setar='fora-home' mural={true}></Nav>
        <div className='mural-elements'>
          <div className='infos'>
            <h2>Bate bola, jogo rápido</h2>
            <h3>Informações rápidas</h3>
            <div className='container-infos'>
              <div className='content-infos'>
                <h4>Visão Geral</h4>
                <div className='content-visao-geral'>
                  <div>
                    <FontAwesomeIcon icon={faMedal} size='lg' color='#000'/>
                    <p>26° no ranking do 7°Ano</p>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faBullhorn} size='lg' color='#000'/>
                    <p>45 kaês</p>
                  </div>
                </div>
                <p className='link-card'>veja mais</p>
              </div>
              <div className='content-infos'>
                <h4>Desafios Pendentes</h4>
                <div className='content-desafios'>
                  <div>
                    <FontAwesomeIcon icon={faCheck} size='lg' color='#000'/>
                    <p>Desafio 5 - postar</p>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faVectorSquare} size='lg' color='#000'/>
                    <p>Desafio 6 - interagir</p>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faVectorSquare} size='lg' color='#000'/>
                    <p>Desafio 7 - cooperar</p>
                  </div>
                </div>
                <p className='link-card'>ver todos</p>
              </div>
              <div className='content-infos'>
                <h4>FALTAM</h4>
                <div className='content-contagem'>
                  <div>
                    <h5>14</h5>
                    <h6>dias</h6>
                  </div>
                  <p>para o Participaê</p>
                </div>
                <p className='link-card'>saiba mais</p>
              </div>
            </div>
          </div>
          <div className='postagens'>
            <h2>Uau, olha que fantástico</h2>
            <h3>faça postagens e filtros dinâmicos</h3>
            <div className='container-postagens'>
              <div className='actions-postagens'>
                <div className='action-postagens action-nova-postagem'>
                  <FontAwesomeIcon icon={faPlus} size='lg' color='#ffffff85'/>
                  <p>Nova Postagem</p>
                </div>
                <div className='actions-right'>
                  <div className='action-postagens action-filtro'>
                    <FontAwesomeIcon icon={faPlus} size='lg' color='#ffffff85'/>
                    <p>Novo Filtro</p>
                  </div>
                  <div className='action-postagens action-filtro'>
                    <FontAwesomeIcon icon={faPen} size='lg' color='#ffffff85'/>
                    <p>Editar Filtros</p>
                  </div>
                  <div className='action-postagens action-filtro'>
                    <FontAwesomeIcon icon={faTrash} size='lg' color='#ffffff85'/>
                    <p>Deletar Filtros</p>
                  </div>
                </div>
              </div>
              <div className='content-postagens'>

              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

