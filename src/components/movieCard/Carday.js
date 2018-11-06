import React, { Component } from 'react'
import { Row, Col, Progress, CardSubtitle } from 'reactstrap';
import './Cardo.css';
import { baseUrl } from '../../helpers/stringHelpers';

export default class Cardo extends Component {

  render() {

    // let { releaseDate } = this.props
    // if (release_date) {
    //   release_date = release_date.split("-").reverse().join("-");
    // }

    return (
      <div className="carteFilm">
        <Row className="englobeCard">
          <Col sm="2" className="cardEnglob" >
            <img className="posterCard" src={baseUrl(this.props.poster)} alt="Not yet !"/>
          </Col>
          <Col className="textEngloge">
            <div className="textCard">
              <p className="sizeletter">{this.props.title}</p>
              <CardSubtitle>Released today ! {this.props.date.split("-").reverse().join("-")} <br/></CardSubtitle>
              <p className="overView">{this.props.resume|| "No resume found !"}</p>
             
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}


