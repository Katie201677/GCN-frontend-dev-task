import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import logo from '../assets/GCNLogoTxt.svg';


function Header(props) {
  
  const { expandNav } = props;

  const handleClick = () => {
    if (typeof(expandNav) === 'function') {
      expandNav();
    }
  }
  
  return (
    <section className="header">
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
        <button 
          className="navBar--menu"
          onClick = {() => handleClick()}
          >
          <FontAwesomeIcon icon="bars" />
        </button>
        <a href="https://www.globalcyclingnetwork.com/" className="navBar--social"><FontAwesomeIcon icon={['fab', 'facebook']} /></a>
        <a href="https://www.globalcyclingnetwork.com/" className="navBar--social"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
        <a href="https://www.globalcyclingnetwork.com/" className="navBar--social last-item"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
      </div>
    </section>
  )
}

export default Header;