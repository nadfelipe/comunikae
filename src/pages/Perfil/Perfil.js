import React, { Component } from 'react'
import './Perfil.css';
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCog } from '@fortawesome/free-solid-svg-icons';
import urlImgTime from '../../assets/img/pangeia-logo.png'
import imgCorujaMedieval from '../../assets/img/coruja-medieval.png'
import imgAltoFalanteMedieval from '../../assets/img/altofalante-medieval.png'
import fotoPerfil from '../../assets/img/img-perfil.png'
//medalhas
import medalha1 from '../../assets/medalhas/Comunicação.png'
import medalha2 from '../../assets/medalhas/Criatividade.png'
import medalha3 from '../../assets/medalhas/Inclusão.png'
import medalha4 from '../../assets/medalhas/Iniciativa.png'
import medalha5 from '../../assets/medalhas/Pacificador.png'
import medalha6 from '../../assets/medalhas/Vigilância.png'

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
      nome: 'Daniel Silva',
      user: '@daniel.silva2',
      numPubs: 23,
      numero: 6,
      ano: 7,
      sala: 'B',
      time: 'Pangeia',
      nivel: 2,
      funcao: 'Coruja',
      classe: 'medieval',
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
          imgClasse = <img src={imgCorujaMedieval} alt='Simbolo do coruja medieval'className='img-coruja'/>
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
        <div className='perfil-elements'>
          <div className='top-perfil'>
            <div className='content-top-perfil'>
              <div className='container-foto-perfil'>
                <img src={fotoPerfil} alt='Foto de perfil' className='foto-perfil'/>
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
                      <FontAwesomeIcon icon={faUserCog} size='sm' color='#000'/>
                      <p className='btn-editar-perfil-p'>Editar Perfil</p>
                    </div>
                  </div>
                </div>
                <div className='fast-infos-perfil'>
                  <div className='time-info'>
                    <p>{this.state.time}</p>
                    <img src={urlImgTime} alt='Simbolo do time' className='img-time'/>
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
              <div className='btn-page btn-page-selected'>
                <span className='seletor seletor-selected'/>
                <p>Pontuações e conquistas</p>
              </div>
              <div className='btn-page'>
                <span className='seletor'/>
                <p>Ranking</p>
              </div>
              <div className='btn-page'>
                <span className='seletor'/> 
                <p>Publicações</p>
              </div>
            </div>
            <div className='content-selected-perfil '>
              <div className='pnts-conquistas'>
                <h2>Você possui</h2>
                <div className='info-kaes'>
                  <img src={imgAltoFalanteMedieval} alt='Alto Falante'/>
                  <div className='info-kaes-textos'>
                    <h3>45</h3>
                    <p>kaês</p>
                  </div>
                </div>
                <p></p>
                <h2>Árvore de conquistas</h2>
                <div className='arvore-conquistas'>
                  <div className='content-medalha'>
                    <img src={medalha4} alt='Medalha Criatividade' className='medalha-perfil '/>
                    <img src={medalha5} alt='Medalha Vigilância' className='medalha-perfil'/>
                    <img src={medalha6} alt='Medalha Vigilância' className='medalha-perfil'/>
                  </div>
                  <div className='content-medalha'>
                    <img src={medalha2} alt='Medalha Criatividade' className='medalha-perfil bloqueada'/>
                    <img src={medalha3} alt='Medalha Vigilância' className='medalha-perfil bloqueada'/>
                  </div>
                  <div className='content-medalha'>
                    <img src={medalha1} alt='Medalha Comunicação' className='medalha-perfil bloqueada'/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

