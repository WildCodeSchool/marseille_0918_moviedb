import React, { Component } from 'react'
import { Row, Col, Progress, CardSubtitle } from 'reactstrap';
import './Cardo.css';
import { baseUrl } from '../../helpers/stringHelpers';

export default class Cardo extends Component {

  render() {
    let { title, release_date, poster_path, vote_average, vote_count, overview } = this.props.movie
    if (release_date) {
      release_date = release_date.split("-").reverse().join("-");
    }

    return (
      <div className="carteFilm">
        <Row className="englobeCard">
          <Col sm="2" className="cardEnglob" >
            <img className="posterCard" src={baseUrl(poster_path)} />
          </Col>
          <Col className="textEngloge">
            <div className="textCard">
              <p className="sizeletter">{title}</p>
              <CardSubtitle>Released: {release_date} <br /></CardSubtitle>
              <p className="sizeletter">{title}</p>              
              <CardSubtitle>Release : {release_date} <br/></CardSubtitle>
              <p className="director">Director : {this.props.directorName}</p>
              <p className="overView">{overview || "No resume found !"}</p>
              <div className="text-left">Average vote:</div>
              <Progress value={vote_average * 10}>{vote_average} / 10</Progress>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}



