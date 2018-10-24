import React, { Component } from 'react'
import Footer from "../footer/Footer";
import Header from "../titlecineasta/TitleCineasta";

import Icones from "../icone/Icones";
import './Home.css';

export default class Homes extends Component {
  render() {
    return (
      <div className="homeComponent">
        <Icones />
        <Header />
        
        <Footer />

      </div>
    )
  }
}