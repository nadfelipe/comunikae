import React, { Component } from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default class Footer extends Component{
    render(){
        return(
            <div className='Footer'>
                <footer className='container-footer'>
                    <div className='links-footer'>
                        <a href='#'>
                            <FontAwesomeIcon icon={faFacebookF} size='2x' color='#fff'/>
                        </a>
                        <a href='#'>
                            <FontAwesomeIcon icon={faInstagram} size='2x' color='#fff'/>
                        </a>
                        <a href='#'>
                            <FontAwesomeIcon icon={faTwitter} size='2x' color='#fff'/>
                        </a>
                        <a href='#'>
                            <FontAwesomeIcon icon={faYoutube} size='2x' color='#fff'/>
                        </a>
                    </div>
                    <p className='footer-p'>© 2020 Comunikaê</p>
                </footer>
            </div>
        )}
}