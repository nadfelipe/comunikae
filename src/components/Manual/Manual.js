import React, { Component } from 'react';
import './Manual.css';
import conteudo from './contentManual.js'

export default class Manual extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id: 1,
            titulo: '',
            texto: '',
            urlImg: null,
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
            console.log(element, element.classList)
        }  
    }

    setarState = (id) => {
        let conteudoBuscado = conteudo.contentManual.find(item => item.id === id)

        this.setState({
            titulo: conteudoBuscado.titulo,
            texto: conteudoBuscado.texto,
            urlImg: conteudoBuscado.urlImg,
            nomeContent: conteudoBuscado.nomeContent,
            texto2: conteudoBuscado.texto2,
        })
    }

    viewDiv(e, id){
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
        return(
            <div className='Manual'>
                <div>
                    {this.state.urlImg === '' ? '' : 
                        <img src={this.state.urlImg} alt=""/>
                    }
                    <div>
                        <p>{this.state.titulo}</p>
                        <p>{this.state.texto}</p>
                        <p>{this.state.texto2}</p>
                        {this.state.nomeContent}
                    </div>
                </div>


                <div className='manual-div-numeros'>
                    <div>
                        <p id='1'  onClick={(e) => this.viewDiv(e, 1)} className='numeros-manual numero-apagado' >1</p>
                        {this.state.id === '1' &&
                        <p>{this.state.nomeContent}</p>}
                    </div>
                    

                    <p id='2' onClick={(e) => this.viewDiv(e, 2)} className='numeros-manual numero-apagado'>2</p>
                    {this.state.id === '2' &&
                    <div>
                        <p>{this.state.nomeContent}</p>
                    </div>}

                    <p id='3' onClick={(e) => this.viewDiv(e, 3)} className='numeros-manual numero-apagado'>3</p>
                    {this.state.id === '3' &&
                    <div>
                        <p>{this.state.nomeContent}</p>
                    </div>}

                    <p id='4' onClick={(e) => this.viewDiv(e, 4)} className='numeros-manual numero-apagado'>4</p>
                    {this.state.id === '4' &&
                    <div>
                        <p>{this.state.nomeContent}</p>
                    </div>}

                    <p id='5' onClick={(e) => this.viewDiv(e, 5)} className='numeros-manual numero-apagado'>5</p>
                    {this.state.id === '5' &&
                    <div>
                        <p>{this.state.nomeContent}</p>
                    </div>}
                </div>

                
            </div>
    )}
}