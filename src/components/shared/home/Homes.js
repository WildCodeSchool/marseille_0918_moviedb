import React, { Component } from 'react'
import Footer from "../footer/Footer";
import Header from "../titlecineasta/TitleCineasta";
import './Home.css';

export default class Homes extends Component {
  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    )
  }
}