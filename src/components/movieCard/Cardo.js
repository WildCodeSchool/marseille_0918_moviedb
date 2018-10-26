import React, { Component } from 'react'
import { Row, Col, Progress } from 'reactstrap';
import './Cardo.css';
import { baseUrl } from '../../helpers/stringHelpers';

export default class Cardo extends Component {
 
  render() {
    // console.log(this.props.date.split("-").reverse().join("-"))
    let {title, poster_path, vote_average, vote_count, overview } = this.props.movie
    let {releaseDate } = this.props
    if(releaseDate){
      releaseDate = releaseDate.split("-").reverse().join("-");
    }

    return (
      <div className="pouet333">
        <Row className="englobeCard">
          <Col sm="2" xs="12" >
            <img className="posterCard" src={baseUrl(poster_path)} />
          </Col>       
          <Col sm="10" xs="12" className="pouet46">
              <div className="pouet55">
                <div className="pouet78">
                  <div className="textCard">
                      <p className="sizeletter">{title}</p>
                      <p className="overView">{overview || "No resume found !"}</p>
                    <div className="pouet555">
                    <div className="text-left">Average vote /10</div>
                      <Progress multi>
                        <Progress bar value={vote_average} animated color="info" max={10}>{vote_average}</Progress>
                      </Progress>
                    </div>
                  </div>
                </div>
              </div>
          </Col>
        </Row>
      </div>
    )
  }
}



