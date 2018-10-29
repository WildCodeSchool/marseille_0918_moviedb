import React, { Component } from 'react'
//import './Icones.css'
import homeicone from './homeicone.png';
import contacticone from './contacticone.png';
import { Col, Container, Row } from 'reactstrap';
import { NavLink} from 'react-router-dom';



export default class Icones extends Component {
  render() {
    return (
      <Container>
        <Row>
          <div className="iconeBoots">
            <Col sm="2">
              <NavLink
                to="/">
                <img className="icones" src={homeicone} alt="iconecontact" />
              </NavLink>
              <NavLink
                to="/contact-us">
                <img className="icones" src={contacticone} alt="iconehome" /></NavLink>
            </Col>
          </div>
        </Row>
      </Container>

    )
  }
}
