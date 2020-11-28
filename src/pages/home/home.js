import React, { Component } from 'react'
import './Home.css';
import Nav from '../../components/Nav/Nav'
import { render } from '@testing-library/react';

export default class Home extends Component{
render(){
    return (
      <div className="Home">
        <Nav setar='fora-menu'></Nav>
        <p>home</p>
      </div>
    );
  }
}

