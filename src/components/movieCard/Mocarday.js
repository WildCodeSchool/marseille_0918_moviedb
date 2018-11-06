import React, { Component } from 'react'
import { Progress } from 'reactstrap';
import './Mocard.css';
import { baseUrl } from '../../helpers/stringHelpers';
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';


export default class Mocarday extends Component {
  render() {
    // console.log(this.props.date.split("-").reverse().join("-"))
    console.log("value", this.props.vote)

  return (
    <div className="card-size">

      <Card>
        <CardBody>
          <CardTitle>{this.props.title}</CardTitle>
          <CardSubtitle>Release today: {this.props.date.split("-").reverse().join("-")}</CardSubtitle>
          <CardText>{this.props.resume || "No resume found !"}</CardText>
          <Progress value={this.props.vote}>{this.props.vote}%</Progress>
        </CardBody>
        <img width="100%" className="posterCard" src={baseUrl(this.props.poster)} alt="No picture yet !" />
      </Card>
     
    </div>
  );
};
}
