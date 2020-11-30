import React, { Component } from "react";
import { Link as SmoothLink  } from "react-scroll";
import ReactTooltip from "react-tooltip";
import './VerticalNav.css';
import inView from 'in-view';

export default class VerticalNav extends Component{
    constructor(props){
    super(props);
    this.state ={
        ativoBanner: true,
        ativoSobre: false,
        ativoDesafio: false,
        ativoManual: false,
        ativoClasses: false,
    }}
    
    handleView = section => {
        const linkEl = document.querySelector(`#link-${section}`);
        
        let offsetHeight = 0.01*(window.innerHeight)
        inView.offset({
            bottom:offsetHeight
        });
        
        inView(`#${section}`)
            .on("enter", () => linkEl.classList.add('dot-active'))
            .on("exit", ()  => linkEl.classList.remove('dot-active'))
    };
    

    dot_selecionado(e, section) {
        switch (section) {
            case 'banner':
                this.setState({ ativoBanner: true, ativoSobre: false, ativoDesafio: false, ativoManual: false, ativoClasses: false })
                break;
            case 'sobre':
                this.setState({ ativoBanner: false, ativoSobre: true, ativoDesafio: false, ativoManual: false, ativoClasses: false })
                break;
            case 'desafios-missao':
                this.setState({ ativoBanner: false, ativoSobre: false, ativoDesafio: true, ativoManual: false, ativoClasses: false })
                break;
            case 'manual':
                this.setState({ ativoBanner: false, ativoSobre: false, ativoDesafio: false, ativoManual: true, ativoClasses: false })
                break;
            case 'classes':
                this.setState({ ativoBanner: false, ativoSobre: false, ativoDesafio: false, ativoManual: false, ativoClasses: true })
                break;
            default:
                break;
    }}

    componentDidMount(){
        ["banner", "sobre", "desafios-missao", "manual", "classes"].forEach(this.handleView);
    }

    render(){
        return(
            <div className="VerticalNav">
                <nav className="verticalNav">
                    <div className='link-list'>
                        <SmoothLink 
                        id='link-banner' 
                        href="#banner" 
                        to="banner" 
                        smooth={true} 
                        data-tip='Banner' 
                        className={'nav-dots dot-banner ' + (this.state.ativoBanner ? 'dot-active' : '')} 
                        onClick={(e) => this.dot_selecionado(e, 'banner')} 
                        />
                        <SmoothLink 
                        id='link-sobre' 
                        href="#sobre" to="sobre" 
                        smooth={true} 
                        data-tip='Sobre' 
                        className={'nav-dots dot-sobre ' + (this.state.ativoSobre ? 'dot-active' : '')} 
                        onClick={(e) => this.dot_selecionado(e, 'sobre')} 
                        />
                        <SmoothLink 
                        id='link-desafios-missao' 
                        href="#desafios-missao" 
                        to="desafios-missao" 
                        smooth={true} 
                        data-tip='O que queremos?' 
                        className={'nav-dots dot-desafios-missao ' + (this.state.ativoDesafio ? 'dot-active' : '')} 
                        onClick={(e) => this.dot_selecionado(e, 'desafios-missao')} 
                        />
                        <SmoothLink 
                        id='link-manual' 
                        href="#manual" 
                        to="manual" 
                        smooth={true} 
                        data-tip='Como Funciona?' 
                        className={'nav-dots dot-manual '  + (this.state.ativoManual ? 'dot-active' : '')} 
                        onClick={(e) => this.dot_selecionado(e, 'manual')} 
                        />
                        <SmoothLink 
                        id='link-classes' 
                        href="#classes" 
                        to="classes" 
                        smooth={true} 
                        data-tip='Classes' 
                        className={'nav-dots dot-classes ' + (this.state.ativoClasses ? 'dot-active' : '')} 
                        onClick={(e) => this.dot_selecionado(e, 'classes')}
                        />
                    </div>
                    <ReactTooltip place="left" effect="float" textColor='#fff' backgroundColor='#008296'/>
                </nav>
            </div>
        );
    }
}