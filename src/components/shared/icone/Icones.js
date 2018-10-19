import React, { Component } from 'react'
import './Icones.css'
import homeicone from './homeicone.png';
import contacticone from './contacticone.png';


export default class Icones extends Component {
  render() {
    return (
        <div>
        <img className="icones" src={homeicone} alt="iconecontact" />
        <img className="icones" src={contacticone} alt="iconehome"/>
      </div>
    )
  }
}
