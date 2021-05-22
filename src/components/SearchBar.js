import React from 'react';
import './SearchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SearchBar() {
  return (
    <div>
      <h3>Latest videos</h3>
      <section className="searchBar">
        <div className="searchBar--searchBox">
          <input type="text" placeholder="Search for videos" className="searchBar--searchBox--input" />
          <button className="searchBar--button"><FontAwesomeIcon icon="search" /></button>
        </div>
        
        <select defaultValue="0" className="searchBar--dropdown">
          <option value="0" disabled>Or browse our videos</option>
          <option>GCN Show</option>
          <option>How To</option>
          <option>Maintenance</option>
          <option>Ask GCN</option>
          <option>Training</option>
          <option>Features</option>
          <option>Top 10s</option>
          <option>GCN Racing</option>
        </select>
      </section>
    </div>
  )
}

export default SearchBar;