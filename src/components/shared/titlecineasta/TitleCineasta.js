import React, { Component } from 'react'
import './TitleCineasta.css';
import { Col, Container, Row} from 'reactstrap';

export default class Header extends Component {
  render() {
    return (
      <Container>
        <Row>
          <div className="header">
            <Col sm="6">
              <p className="titleCineasta">cineasta,</p>
              <p className="subtitle">always update <br></br>on the latest movie releases </p>
            </Col>
          </div>
        </Row>
      </Container>
    )
  }
}
