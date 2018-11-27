import React, { Component } from 'react'
import { Row, Col, CardSubtitle } from 'reactstrap';
import './Cardo.1.css';
import { baseUrl } from '../../helpers/stringHelpers';

export default class Cardo extends Component {

  render() {
    return (
      <div className="carteFilm">
        <Row className="englobeCard">
          <Col sm="2" className="cardEnglob" >
            <img className="posterCard" src={baseUrl(this.props.poster)} alt="Not yet !" />
          </Col>
          <Col className="textEngloge">
            <div className="textCard">
              <p className="sizeletter">{this.props.title} [released today : {this.props.date.split("-").reverse().join("-")}] </p>
              <p className="overView">{this.props.resume || "No resume found !"}</p>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}


