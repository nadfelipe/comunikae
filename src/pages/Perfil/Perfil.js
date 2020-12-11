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
      nome: 'Daniel Silva',
      user: '@daniel.silva2',
      numPubs: 23,
      numero: 6,
      ano: 7,
      sala: 'B',
      time: 'Pangeia',
      nivel: 2,
      funcao: 'Coruja',
      classe: 'futurista',
    });
    this.getYear();
  }
  render(){
    return (
      <div className="Perfil">
        <Nav setar='fora-home' perfil={true}></Nav>
        <div className='top-perfil'>

          <div className='content-top-perfil'>
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
                {this.state.classe === 'medieval' &&
                  <img src={this.state.urlImgTime} alt='Simbolo do coruja medieval'/>
                }
                {this.state.classe === 'futurista' &&
                  <img src={this.state.urlImgTime} alt='Simbolo do coruja futurista'/>
                }
                {this.state.classe === 'fofo' &&
                  <img src={this.state.urlImgTime} alt='Simbolo do coruja fofo'/>
                }
                {this.state.classe === 'espacial' &&
                  <img src={this.state.urlImgTime} alt='Simbolo do coruja espacial'/>
                }
              </div>
            </div>
          </div>
        </div>
        <div className='select-page-perfil'>

        </div>
        <div className='content-selected-perfil'>

        </div>
        <Footer/>
      </div>
    );
  }
}

