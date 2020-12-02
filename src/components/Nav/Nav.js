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
      <div id='topo' className="Nav">
          <header>
            <nav className='nav'>
              {this.props.setar === 'home' &&
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
                        <img src={StartBtnIcon} alt='Botão de start'/>
                      </div>
                      <p>Entrar no jogo</p>
                    </Link>
                  </div>
                </div>}
              
              {this.props.setar === 'fora-home' &&
              <div className='nav-container-fora'>
                <div id='links-fora'>
                  <Link to="/">
                    <img src={Logo} alt='Logo do Comunikaê'/>
                  </Link>
                  <div className='icons'>
                    {this.props.mural ? 
                    <Link to="/mural">
                      <FontAwesomeIcon icon={faHome} size='lg' color='#F23545'/>
                    </Link> 
                    : 
                    <Link to="/mural">
                    <FontAwesomeIcon icon={faHome} size='lg' color='#97212B'/>
                    </Link>}
                    {this.props.explorar ? 
                    <Link to="/explorar">
                      <FontAwesomeIcon icon={faCompass} size='lg' color='#F23545'/>
                    </Link> 
                    : 
                    <Link to="/explorar">
                    <FontAwesomeIcon icon={faCompass} size='lg' color='#97212B'/>
                    </Link>}
                    {this.props.config ? 
                    <Link to="/config">
                      <FontAwesomeIcon icon={faCog} size='lg' color='#F23545'/>
                    </Link> 
                    : 
                    <Link to="/config">
                    <FontAwesomeIcon icon={faCog} size='lg' color='#97212B'/>
                    </Link>}
                    {this.props.perfil ? 
                    <Link to="/perfil">
                      <FontAwesomeIcon icon={faUser} size='lg' color='#F23545'/>
                    </Link> 
                    : 
                    <Link to="/perfil">
                    <FontAwesomeIcon icon={faUser} size='lg' color='#97212B'/>
                    </Link>}
                  </div>
                </div>
              </div>}
            </nav>
          </header>
      </div>
    );
  }
}

