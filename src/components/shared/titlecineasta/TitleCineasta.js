import React, { Component } from 'react'
import './TitleCineasta.css';

export default class Header extends Component {
  render() {
    return (
        <div className="header">
            <p className="titleCineasta">cineasta,</p>
            <p className="subtitle">always update <br></br>on the latest movie releases </p>
        </div>
    )
  }
}
