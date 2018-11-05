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
                to="/"
                exact activeClassName="selected">
                <img className="icones" src={homeicone} alt="iconehome" title="Home" />
              </NavLink>
              <NavLink
                to="/contact-us"
                exact activeClassName= "selected">
                <img className="icones" src={contacticone} alt="iconecontact" title="Contact" />
              </NavLink>
              <NavLink
                to="/released-today"
                exact activeClassName="selected">
                <img className="icones" src={logostar} alt="iconetoday" title="Today's releases" />
              </NavLink>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="title">
              <NavLink to="/">
                <p className="fullTitle"><span className="titleCineasta">cineasta,<br /></span>
                  <span className="subtitle">the SHORTER way to movie's release date ! and more...</span></p>
              </NavLink>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

