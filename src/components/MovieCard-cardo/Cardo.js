import React, { Component } from 'react'
import { Card, CardText, CardBody, CardLink, CardTitle, CardSubtitle } from 'reactstrap';
import './Cardo.css'
import { baseUrl } from './helpers/stringHelper'






class Cardo extends Component {
 
 
 
 
  render() {
    console.log(this.props.date.split("-").reverse().join("-"))

    // const {item} = this.props;
    return (
      <div>
      <Card >
      <CardBody>
        <p className="sizeletter">{this.props.title}</p>
        <CardSubtitle>Date de sortie : {this.props.date.split("-").reverse().join("-")}</CardSubtitle>
      </CardBody>
          <img width="100%" src={baseUrl(this.props.backdrop)} alt="Card image cap" />
      <CardBody>
         <CardText>{this.props.resume}</CardText>
         <CardLink href="#">Average vote : {this.props.vote}</CardLink>
         <CardLink href="#">Vote count : {this.props.voteco}</CardLink>
      </CardBody>
    </Card>
        

      </div>
    )
  }
}



export default Cardo;



