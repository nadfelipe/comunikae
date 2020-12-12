import React, { Component } from 'react'
import './Perfil.css';
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCog } from '@fortawesome/free-solid-svg-icons';

export default class Perfil extends Component{
  constructor(props) {
    super(props);
    this.state = {
        urlImgFotoPerfil: '',
        nome: '',
        user: '',
        numPubs: '',
        numero: '',
        ano: '',
        sala: '',
        anoAtual: '',
        time: '',
        urlImgTime: '',
        nivel: '',
        funcao: '',
        classe: '',
    }
}
  getYear() { 
    this.setState({anoAtual: new Date().getFullYear()})
  }
  componentDidMount(){
    this.setState({
      urlImgFotoPerfil: '',
      nome: 'Daniel Silva',
      user: '@daniel.silva2',
      numPubs: 23,
      numero: 6,
      ano: 7,
      sala: 'B',
      time: 'Pangeia',
      urlImgTime: '',
      nivel: 2,
      funcao: 'Coruja',
      classe: 'futurista',
    });
    this.getYear();
  }
  render(){
    let imgClasse;
    if (this.state.funcao === 'Coruja') {
      switch (this.state.classe) {
        case 'futurista':
          imgClasse = <img src={this.state.urlImgTime} alt='Simbolo do coruja futurista'/>
          break;
        case 'medieval':
          imgClasse = <img src={this.state.urlImgTime} alt='Simbolo do coruja medieval'/>
          break;
        case 'fofo':
          imgClasse = <img src={this.state.urlImgTime} alt='Simbolo do coruja fofo'/>
          break;
        case 'espacial':
          imgClasse = <img src={this.state.urlImgTime} alt='Simbolo do coruja espacial'/>
          break;
        default:
          imgClasse = ''
          break;
    }}
    return (
      <div className="Perfil">
        <Nav setar='fora-home' perfil={true}></Nav>
        <div className='top-perfil'>
          <div className='content-top-perfil'>
            <div className='foto-perfil'>
              <img src={this.state.urlImgFotoPerfil} alt='Foto de perfil'/>
            </div>
            <div className='infos-perfil'>
              <div className='personal-infos'>
                <div className='left-personal-infos'>
                  <div className='nome-user-infos'>
                    <h2>{this.state.nome}</h2>
                    <h3>{this.state.user}</h3>
                  </div>
                  <p>Aparece em: {this.state.numPubs} publicações</p>
                </div>
                <div className='right-personal-infos'>
                  <p>N°{this.state.numero}, {this.state.ano}°{this.state.sala} {this.state.anoAtual}</p>
                  <div className='btn-editar-perfil'>
                    <FontAwesomeIcon icon={faUserCog} size='sm' color='#F23545'/>
                    <p>Editar Perfil</p>
                  </div>
                </div>
              </div>
              <div className='fast-infos-perfil'>
                <div className='time-info'>
                  <p>{this.state.time}</p>
                  <img src={this.state.urlImgTime} alt='Simbolo do time'/>
                </div>
                <div className='nivel-info'>
                  <p>Nível {this.state.nivel}</p>
                </div>
                <div className='funcao-info'>
                  <p>{this.state.funcao}</p>
                  {imgClasse}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='content-perfil'>
          <div className='select-page-perfil'>
            <div className='btn-page-ptns'>
              <p>Pontuações e conquistas</p>
            </div>
            <div className='btn-page-ranking'>
              <p>Ranking</p>
            </div>
            <div className='btn-page-pubs'>
              <p>Publicações</p>
            </div>
          </div>
          <div className='content-selected-perfil'>

          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

