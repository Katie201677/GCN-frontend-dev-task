import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import logo from '../assets/GCNLogoTxt.svg';


function Header() {
  return (
    <section>
      <div className="banner">
        <img src={logo} className="banner--logo" alt="GCN Logo" />
        <ul className="banner--links">
          <li className="banner--link-item">Events</li>
          <li className="banner--link-item">Club</li>
          <li className="banner--link-item">Shop</li>
          <li className="banner--link-item last-item">YouTube</li>
        </ul>
      </div>

      <div className="navBar">
        <a href="" className="navBar--menu"><FontAwesomeIcon icon="bars" /></a>
        <a href="" className="navBar--social"><FontAwesomeIcon icon={['fab', 'facebook']} /></a>
        <a href="" className="navBar--social"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
        <a href="" className="navBar--social last-item"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
      </div>
    </section>
  )
}

export default Header;