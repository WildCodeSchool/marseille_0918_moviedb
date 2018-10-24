import React, { Component } from 'react'
import './Icones.css'
import homeicone from './homeicone.png';
import contacticone from './contacticone.png';
import { Col, Container, Row } from 'reactstrap';


export default class Icones extends Component {
  render() {
    return (
      <Container>
        <Row>
          <div className="iconeBoots">
            <Col sm="2">
              <img className="icones" src={homeicone} alt="iconecontact" />
              <img className="icones" src={contacticone} alt="iconehome"/>
            </Col>
          </div>
        </Row>
      </Container>
    )
  }
}
