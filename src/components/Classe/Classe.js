import React, { Component } from 'react';
import './Classe.css';
import conteudoClasses from './contentClasses.js';
import iconFofo from '../../assets/img/icon-fofo.png';
import iconMedieval from '../../assets/img/icon-medieval.png';
import iconFuturista from '../../assets/img/icon-futurista.png';
import iconEspacial from '../../assets/img/icon-espacial.png';

export default class Manual extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id: 1,
            titulo: '',
            texto: '',
        }
    }

    cleanState(){
        this.setState({id:'', titulo: '', texto:'', urlImg:''})
    }

    apagarBackgroundImg = () => {
        const element = document.getElementById('textos-classes');
        element.classList.remove('texto-fofo');
        element.classList.remove('texto-medieval');
        element.classList.remove('texto-futurista');
        element.classList.remove('texto-espacial');
    }

    mudarBackgroundImg = (id) => {
        this.apagarBackgroundImg();

        let contentBuscado = conteudoClasses.contentClasses.find(item => item.id === id)
        const element = document.getElementById('textos-classes');

        switch (contentBuscado.titulo) {
            case 'fofo':
                element.classList.add('texto-fofo');
                break;
            case 'medieval':
                element.classList.add('texto-medieval');
                break;
            case 'futurista':
                element.classList.add('texto-futurista');
                break;
            case 'espacial':
                element.classList.add('texto-espacial');
                break;
        
            default:
                break;
        }
    }

    voltarCor = (nome) =>{
        this.apagarCor();
        const element = document.getElementById(`${nome}`);
        element.classList.add('icon-ligado');
        element.classList.remove('icon-desligado');
    }

    apagarCor = () =>{
        for (let i = 1; i < 5; i++) {
            let contentBuscado = conteudoClasses.contentClasses.find(item => item.id === i)
            const element = document.getElementById(`${contentBuscado.titulo}`);
            element.classList.add('icon-desligado');
            element.classList.remove('icon-ligado');
        }
    }

    setarStateClasses = (id) => {
        let contentBuscado = conteudoClasses.contentClasses.find(item => item.id === id)

        this.setState({
            id: contentBuscado.id,
            titulo: contentBuscado.titulo,
            texto: contentBuscado.texto,
        })
    }

    trocarShowDiv(e, nome, id){
        this.voltarCor(nome);
        this.cleanState();
        this.setarStateClasses(id);
        this.mudarBackgroundImg(id);
    }

    componentDidMount(){
        this.setarStateClasses(this.state.id);
        ["fofo", "medieval", "futurista", "espacial"].forEach(this.apagarCor);
        document.getElementById('fofo').classList.add('icon-ligado');
        this.mudarBackgroundImg(1)
    }


    render(){
        const { texto } = this.state;
        return(
            <div className='Classes'>
                <div className='simbolo-classes'>
                    <img id='fofo' onClick={(e) => this.trocarShowDiv(e, 'fofo', 1)} src={iconFofo} className='img-simbolo-classes icon-desligado' alt=''/>
                    <img id='medieval' onClick={(e) => this.trocarShowDiv(e, 'medieval', 2)} src={iconMedieval} className='img-simbolo-classes icon-desligado' alt=''/>
                    <img id='futurista' onClick={(e) => this.trocarShowDiv(e, 'futurista', 3)} src={iconFuturista} className='img-simbolo-classes icon-desligado' alt=''/>
                    <img id='espacial' onClick={(e) => this.trocarShowDiv(e, 'espacial', 4)} src={iconEspacial} className='img-simbolo-classes icon-desligado' alt=''/>
                </div>
                <div id='textos-classes' className='textos-classes'>
                    <p>{texto}</p>
                </div>
            </div>
        )}
}

