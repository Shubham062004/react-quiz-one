import './home.css';
import image from './image/free-arrow-down-icon-3101-thumb.png';

import React, { Component } from 'react'

export default class HomeComponent extends Component {
  render() {
    return (
      <div className='abc'>
        <h1>Quiz App</h1>
        <button id='play'>PLAY</button>
        <img src={image} alt="heloo" id="arrow" />
      </div>
    )
  }
}