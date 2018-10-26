import React, { Component } from 'react'
import './TitleCineasta.css';
import { Col,  Row} from 'reactstrap';
import homeicone from './homeicone.png';
import contacticone from './contacticone.png';

export default class Header extends Component {
  render() {
    return (
      <div>
        <Row className="pouet44">            
          <Col sm="2" lg="2" md="2" >
            <div className="iconeBoots">
              <img className="icones" src={homeicone} alt="iconecontact" />
              <img className="icones" src={contacticone} alt="iconehome" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm="12">
            <div className="header">
              <p className="fullTitle"><span className="titleCineasta">cineasta,<br></br></span>
              <span className="subtitle">always update <br></br>on the latest movie releases </span></p>
            </div>
          </Col>
        </Row>
      </div>
      )
    }
  }

