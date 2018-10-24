import React, { Component } from 'react'
import Footer from "../footer/Footer";
import Header from "../titlecineasta/TitleCineasta";
import {Container, Row, Col} from 'reactstrap';
import ContactForm from '../../contactForm/ContactForm';

import Icones from "../icone/Icones";
import './Home.css';

export default class Homes extends Component {
  render() {
    return (
      <div className="homeComponent">
        <Icones />
        <Header />
        <Container>
        <Row>
          <Col sm={{ size: 6, offset: 3 }} md={{size: 1, offset: 6}}><ContactForm/></Col>
        </Row> 
        
      </Container>
        <Footer />

      </div>
    )
  }
}