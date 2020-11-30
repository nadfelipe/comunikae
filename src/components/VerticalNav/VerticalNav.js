import React, { Component } from "react";
import { Link as SmoothLink  } from "react-scroll";
import ReactTooltip from "react-tooltip";
import './VerticalNav.css';

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

    render(){
        return(
            <div className="VerticalNav">
                <nav className="verticalNav">
                    <div className='link-list'>
                        <SmoothLink to="banner" smooth={true} data-tip='Banner'>
                            <span 
                            className={'nav-dots dot-banner ' + (this.state.ativoBanner ? 'dot-active' : '')} 
                            onClick={(e) => this.dot_selecionado(e, 'banner')} 
                            />
                        </SmoothLink>
                        <SmoothLink to="sobre" smooth={true} data-tip='Sobre'>
                            <span 
                            className={'nav-dots dot-sobre ' + (this.state.ativoSobre ? 'dot-active' : '')} 
                            onClick={(e) => this.dot_selecionado(e, 'sobre')} 
                            />
                        </SmoothLink>
                        <SmoothLink to="desafios-missao" smooth={true} data-tip='O que queremos?'>
                            <span 
                            className={'nav-dots dot-desafios-missao ' + (this.state.ativoDesafio ? 'dot-active' : '')} 
                            onClick={(e) => this.dot_selecionado(e, 'desafios-missao')} 
                            />
                        </SmoothLink>
                        <SmoothLink to="manual" smooth={true} data-tip='Como Funciona?'>
                            <span 
                            className={'nav-dots dot-manual '  + (this.state.ativoManual ? 'dot-active' : '')} 
                            onClick={(e) => this.dot_selecionado(e, 'manual')} 
                            />
                        </SmoothLink>
                        <SmoothLink to="classes" smooth={true} data-tip='Classes'>
                            <span 
                            className={'nav-dots dot-classes ' + (this.state.ativoClasses ? 'dot-active' : '')} 
                            onClick={(e) => this.dot_selecionado(e, 'classes')} />
                        </SmoothLink>
                    </div>
                    <ReactTooltip place="left" effect="float" textColor='#fff' backgroundColor='#008296'/>
                </nav>
            </div>
        );
    }
}