import React, { Component } from 'react'
import './Mural.css';
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer.js'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMedal, faBullhorn, faVectorSquare, faCheck, faPlus, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

export default class Mural extends Component{
  render(){
    return (
      <div className="Mural">
        <Nav setar='fora-home' mural={true}></Nav>
        <div>
          <h2>Bate bola, jogo rápido</h2>
          <h3>Informações rápidas</h3>
          <div>
            <div>

            </div>
            <div>

            </div>
            <div>

            </div>
          </div>
        </div>
        <div>
          <h2>Uau, olha que fantástico</h2>
          <h3>faça postagens e filtros dinâmicos</h3>
          <div>
            <div>
              <div>
              <FontAwesomeIcon icon={faPlus} size='sm' color='#F23545'/>
              <p>Nova Postagem</p>
              </div>
              <div>
                <div>
                  <FontAwesomeIcon icon={faPlus} size='sm' color='#F23545'/>
                  <p>Novo Filtro</p>
                </div>
                <div>
                  <FontAwesomeIcon icon={faPen} size='sm' color='#F23545'/>
                  <p>Editar Filtros</p>
                </div>
                <div>
                  <FontAwesomeIcon icon={faTrash} size='sm' color='#F23545'/>
                  <p>Deletar Filtros</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

