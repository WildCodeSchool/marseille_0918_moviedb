import React, { Component } from 'react'
import ContactForm from './components/contactForm/ContactForm';
import {Container, Row, Col} from 'reactstrap';

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col><ContactForm/></Col>
        </Row> 
        
      </Container>
    )
  }
}
