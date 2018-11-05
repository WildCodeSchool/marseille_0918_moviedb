import React, { Component } from 'react'
import './Header.css';
import { Col, Row } from 'reactstrap';
import homeicone from './homeicone.png';
import contacticone from './contacticone.png';
import { NavLink } from 'react-router-dom';
import logostar from './logo-star.png';

export default class Header extends Component {
  render() {
    return (
      <div>

        <Row>
          <Col lg={{ size: 1, offset: 1 }} >
            <div className="iconeBoots">
              <NavLink
                to="/">
              <img className="icones" src={contacticone} alt="iconehome" />

              </NavLink>

              <NavLink
                to="/contact-us">
                <img className="icones" src={homeicone} alt="iconecontact" />

              </NavLink>



              <NavLink
                to="/released-today">
                <img className="icones" src={logostar} alt="iconetoday" />
              </NavLink>
            </div>
          </Col>

        </Row>



        <Row>
          <Col xs={{ size: 8, offset: 2 }} lg={{ size: 4, offset: 4 }} >
            <div className="title">
              <NavLink
                to="/">
                <p className="fullTitle"><span className="titleCineasta">cineasta,<br></br></span>
                  <span className="subtitle">the SHORTER way to movie's release date ! and more...</span></p>
              </NavLink>
            </div>
          </Col>
        </Row>

      </div>
    )
  }
}

