import React, { Component } from 'react';
import './Manual.css';
import conteudo from './contentManual.js'

export default class Manual extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            titulo: '',
            texto: '',
            urlImg: null,
            nomeContent: '',
            texto2: '',
        }
    }

    render(){
        return(
            <div>

            </div>
    )}
}