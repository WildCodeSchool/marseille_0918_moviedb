import React, { Component } from 'react'
import { Card, CardText, CardBody, CardLink, CardSubtitle, Row, Container, Col } from 'reactstrap';
import './Cardo.css'
import { baseUrl } from '../../helpers/stringHelpers'

class Cardo extends Component {
 
  render() {
    // console.log(this.props.date.split("-").reverse().join("-"))
    let {title, backdrop_path, vote_average, vote_count, overview } = this.props.movie
    let {releaseDate } = this.props
    if(releaseDate){
      releaseDate = releaseDate.split("-").reverse().join("-");
    }
    console.log(title, backdrop_path, vote_average, vote_count, releaseDate, overview )
    return (
    <Container>
      <div className="movieCard">
        <Row>
            <Col sm="6">
                <Card>
                  <CardBody>
                    <p className="sizeletter">{title}</p>
                    <CardSubtitle>Release date : {releaseDate}</CardSubtitle>
                  </CardBody>
                    <img width="100%" src={baseUrl(backdrop_path)} alt="Card image cap" />
                  <CardBody>
                  <CardText>{overview || "No resume found !"}</CardText>
                  <CardLink href="#">Average vote : {vote_average} Vote count : {vote_count}</CardLink>
                  </CardBody>
                </Card>
            </Col>
          </Row>
        </div>
      </Container>
    )
  }
}



export default Cardo;



