import React, { Component } from "react";
import { Link as SmoothLink  } from "react-scroll";
import ReactTooltip from "react-tooltip";
import './VerticalNav.css';

export default class VerticalNav extends Component{
    render(){
        return(
            <div className="VerticalNav">
                <nav className="verticalNav">
                    <div className='link-list'>
                        <SmoothLink to="banner" smooth={true} data-tip='Banner'><span className='nav-dots dot-banner dot-active'>a</span></SmoothLink>
                        <SmoothLink to="sobre" smooth={true} data-tip='Sobre'><span className='nav-dots dot-sobre'></span></SmoothLink>
                        <SmoothLink to="desafios-missao" smooth={true} data-tip='O que queremos?'><span className='nav-dots dot-desafios-missao'></span></SmoothLink>
                        <SmoothLink to="manual" smooth={true} data-tip='Como Funciona?'><span className='nav-dots dot-manual'></span></SmoothLink>
                        <SmoothLink to="classes" smooth={true} data-tip='Classes'><span className='nav-dots dot-classes'></span></SmoothLink>
                    </div>
                    <ReactTooltip place="left" effect="solid" textColor='#fff' backgroundColor='#008296'/>
                </nav>
            </div>
        );
    }
}