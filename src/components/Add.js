import React from 'react';
import add from '../assets/add-screenshot.png';
import './Add.css';

function Add() {
  return (
    <section className="add">
      <div>
        <img src={add} className="add--screenshot" alt="advertisement" />
      </div>
    </section>
  )
}

export default Add;