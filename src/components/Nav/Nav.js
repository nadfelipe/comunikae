import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Link as SmoothLink  } from "react-scroll";
//css
import './Nav.css';
// imagens
import Logo from './../../assets/img/comunikae_logo.svg'
import StartBtnIcon from './../../assets/img/start_btn.svg'
// ícones
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faCompass, faCog, faUser } from '@fortawesome/free-solid-svg-icons';



export default class Nav extends Component{
  render(){
    return (
      <div className="Nav">
          <header>
            <nav className='nav'>
              {this.props.setar === 'menu' &&
                <div className='nav-container-home'>
                  <div id='links-home'>
                    <Link to="/">
                      <img src={Logo} alt='Logo do Comunikaê'/>
                    </Link>
                    <div className='nav-content-home'>
                      <SmoothLink to="sobre" smooth={true} className="nav-link">Sobre</SmoothLink>
                      <SmoothLink to="desafios-missao" smooth={true} className="nav-link">O que queremos?</SmoothLink>
                      <SmoothLink to="manual" smooth={true} className="nav-link">Como funciona?</SmoothLink>
                      <SmoothLink to="classes" smooth={true} className="nav-link">Classes</SmoothLink>
                    </div>
                    <Link to="/login" className='btn-entrar'>
                      <div className='btn-entrar-icon'>
                        <img src={StartBtnIcon}/>
                      </div>
                      <p>Entrar no jogo</p>
                    </Link>
                  </div>
                </div>
              }
              
              {this.props.setar === 'fora-menu' &&
                <div id='links-logado'>
                  {/* TODO: alterar as cores pelas props dos icones selecionados  */}
                  <Link to="/">
                    <img src={Logo} alt='Logo do Comunikaê'/>
                  </Link>
                  <Link to="/mural">
                    <FontAwesomeIcon icon={faHome} />
                  </Link>
                  <Link to="/explorar">
                    <FontAwesomeIcon icon={faCompass} />
                  </Link>
                  <Link to="/config">
                    <FontAwesomeIcon icon={faCog} />
                  </Link>
                  <Link to="/perfil">
                    <FontAwesomeIcon icon={faUser} />
                  </Link>
                </div>
              }
              
              
              
            </nav>
          </header>
      </div>
    );
  }
}

