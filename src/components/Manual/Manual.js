import React, { Component } from 'react';
import './Manual.css';
import conteudo from './contentManual.js';
import imagem1 from '../../assets/img/imagem-1.svg';
import imagem2 from '../../assets/img/imagem-2.png';
import imagem3 from '../../assets/img/imagem-3.png';
import imagem4 from '../../assets/img/imagem-4.png';
import imagem5 from '../../assets/img/imagem-5.png';

export default class Manual extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id: 1,
            titulo: '',
            texto: '',
            urlImg: 0,
            nomeContent: '',
            texto2: '',
        }
    }

    cleanState(){
        this.setState({id:'', titulo: '', texto:'', urlImg:'', nomeContent:'', texto2:''})
    }
    
    mudarCor = (numero) =>{
        this.zerarCor();
        const element = document.getElementById(`${numero}`);
        element.classList.add('numero-ligado'); 
    }

    zerarCor = () =>{
        for (let i = 1; i < 6; i++) {
            const element = document.getElementById(`${i}`);
            element.classList.remove('numero-ligado');
        }  
    }

    setarState = (id) => {
        let conteudoBuscado = conteudo.contentManual.find(item => item.id === id)

        this.setState({
            id: conteudoBuscado.id,
            titulo: conteudoBuscado.titulo,
            texto: conteudoBuscado.texto,
            urlImg: conteudoBuscado.urlImg,
            nomeContent: conteudoBuscado.nomeContent,
            texto2: conteudoBuscado.texto2,
        })
    }

    showDiv(e, id){
        this.mudarCor(id);
        this.cleanState();
        this.setarState(id);
    }

    componentDidMount(){
        this.setarState(this.state.id);
        ["1", "2", "3", "4", "5"].forEach(this.zerarCor);
        document.getElementById('1').classList.add('numero-ligado');
    }

    render(){
        const { id, titulo, texto, urlImg, nomeContent, texto2 } = this.state;
        return(
            <div className='Manual'>
                <div className='manual-div-content'>
                    {urlImg === 1 && <img className='manual-img' src={imagem1} alt=""/>}
                    {urlImg === 2 && <img className='manual-img' src={imagem2} alt=""/>}
                    {urlImg === 3 && <img className='manual-img' src={imagem3} alt=""/>}
                    {urlImg === 4 && <img className='manual-img' src={imagem4} alt=""/>}
                    {urlImg === 5 && <img className='manual-img' src={imagem5} alt=""/>}

                    <div className='manual-textos'>
                        <h3 className='manual-h3'>{titulo}</h3>
                        <br/>
                        <p className='home-p manual-p'>{texto}</p>
                        <br/>
                        <p className='home-p manual-p'>{texto2}</p>
                    </div>
                </div>
                <div className='manual-div-numeros'>
                    <div className='div-numero-nome'>
                        <p id='1'  onClick={(e) => this.showDiv(e, 1)} className='numeros-manual numero-apagado' >1</p>
                        {id === 1 &&
                        <p className='nome-numero'>{nomeContent}</p>}
                    </div>
                    
                    <div className='div-numero-nome'>
                        <p id='2' onClick={(e) => this.showDiv(e, 2)} className='numeros-manual numero-apagado'>2</p>
                        {id === 2 &&
                        <p className='nome-numero'>{nomeContent}</p>}
                    </div>
                    <div className='div-numero-nome'>
                        <p id='3' onClick={(e) => this.showDiv(e, 3)} className='numeros-manual numero-apagado'>3</p>
                        {id === 3 &&
                        <p className='nome-numero'>{nomeContent}</p>}
                    </div>
                    <div className='div-numero-nome'>
                        <p id='4' onClick={(e) => this.showDiv(e, 4)} className='numeros-manual numero-apagado'>4</p>
                        {id === 4 &&
                        <p className='nome-numero'>{nomeContent}</p>}
                    </div>
                    <div className='div-numero-nome'>
                        <p id='5' onClick={(e) => this.showDiv(e, 5)} className='numeros-manual numero-apagado'>5</p>
                        {id === 5 &&
                        <p className='nome-numero'>{nomeContent}</p>}
                    </div>
                </div>
            </div>
    )}
}