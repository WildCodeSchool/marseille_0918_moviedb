import React, { Component } from 'react'
import { Card, CardText, CardBody, CardLink, CardTitle, CardSubtitle } from 'reactstrap';


export default class MovieCard extends Component {

    render() {
        console.log(this.props.date.split("-").reverse().join("-"))
    
        // const {item} = this.props;
        return (
          <div>
          <Card >
          <CardBody>
            <p className="sizeletter">Hello</p>
            <CardSubtitle>Date de sortie : never</CardSubtitle>
          </CardBody>
              
          <CardBody>
             <CardText>Résumé</CardText>
             <CardLink href="#">Average vote : va savoir </CardLink>
             <CardLink href="#">Vote count :</CardLink>
          </CardBody>
        </Card>
            
    
          </div>
        )
     }
  
 
    
}




