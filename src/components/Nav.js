import React from 'react';
import "./Nav.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Nav(props) {
  
  const { isNavExpanded, expandVideos, expandPresenters, isVideosExpanded, isPresentersExpanded } = props;
  const videosArray = ["GCN Show", "How To", "Maintenance", "Ask GCN", "Training", "Features", "Top 10s", "GCN Racing", "GCN Tech"];
  const presentersArray = ["Conor Dunne", "Danial Lloyd", "James Lowsley-Williams", "Jon Cannings", "Manon Lloyd", "Oliver Bridgewood", "Simon Richardson", "Tom Last"];

  const videoMenuItems = videosArray.map((item) => {
    return (
      <li className="nav--list--item expanded" key={item}>{item}</li>
    )
  })

  const presentersMenuItems = presentersArray.map((item) => {
    return (
      <li className="nav--list--item expanded" key={item}>{item}</li>
    )
  })

  const handleVideosClick = () => {
    if (typeof(expandVideos) === "function") {
      expandVideos();
    }
  }

  const handlePresentersClick = () => {
    if (typeof(expandPresenters) === "function") {
      expandPresenters();
    }
  }

  return(
    <nav className="nav">
      <ul className={isNavExpanded ? 'nav--list--visible' : 'nav--list'}>
        {/* {navLayout} */}
        <li className="nav--list--item">Home</li>
        
        <li className="nav--list--item nav--list--item--plus">Videos GCN
          <button 
          className="plus-button"
          onClick = {() => handleVideosClick()}
          >
            <FontAwesomeIcon icon="plus" />
          </button>
        </li>

        <ul className={isVideosExpanded ? 'nav--list--visible' : 'nav--list'}>
          {videoMenuItems}
        </ul>

        <li className="nav--list--item nav--list--item--plus">Presenters
          <button 
          className="plus-button"
          onClick = {() => handlePresentersClick()}
          >
            <FontAwesomeIcon icon="plus" />
          </button>
        </li>

        <ul className={isPresentersExpanded ? 'nav--list--visible' : 'nav--list'}>
          {presentersMenuItems}
        </ul>
      </ul>
    </nav>
  )
}

export default Nav;