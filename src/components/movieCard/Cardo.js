import React, { Component } from 'react'
import { Row, Col, Progress, CardSubtitle  } from 'reactstrap';
import './Cardo.css';
import { baseUrl } from '../../helpers/stringHelpers';

export default class Cardo extends Component {

  render() {
    // console.log(this.props.date.split("-").reverse().join("-"))
    let { title, release_date, poster_path, vote_average, vote_count, overview } = this.props.movie
    let { releaseDate } = this.props
    if (releaseDate) {
      releaseDate = releaseDate.split("-").reverse().join("-");
    }

    return (
      <div className="carteFilm">
        <Row className="englobeCard">
          <Col sm="2" className="cardEnglob" >
            <img className="posterCard" src={baseUrl(poster_path)} />
          </Col>
          <Col>
            <div className="textCard">
              <p className="sizeletter">{title}</p>
              <CardSubtitle>Release : {release_date}</CardSubtitle>
              <p className="overView">{overview || "No resume found !"}</p>
                <div className="text-left">Average vote /10</div>
                
              
                <Progress value={vote_average * 10}>{vote_average} / 10</Progress>
      
              </div>
          </Col>
        </Row>
      </div>
    )
  }
}



