import React from 'react';
import add from '../assets/add-screenshot.png';
import './Ad.css';

function Ad() {
  return (
    <section className="ad">
      <div>
        <img src={add} className="ad--screenshot" alt="advertisement" />
      </div>
    </section>
  )
}

export default Ad;