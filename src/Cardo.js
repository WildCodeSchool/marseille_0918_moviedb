
import React, { Component } from 'react'
import { Card, CardText, CardBody, CardLink, CardTitle, CardSubtitle } from 'reactstrap';







class Cardo extends Component {
 
 
 
 
  render() {
   

    // const {item} = this.props;
    return (
      <div>

        <Card className="movycard">
          <CardBody >
            <CardTitle>jdkssdk</CardTitle>
            <CardSubtitle>Date de sortie :</CardSubtitle>
          </CardBody>
        
          <CardBody>
            <CardText>jdfhjkshf</CardText>
            <CardLink href="#">Average vote : {this.props.vote}</CardLink>
            <CardLink href="#">Vote count : {this.props.voteco}</CardLink>
          </CardBody>
        </Card>

      </div>
    )
  }
}



export default Cardo;


//<img width="100%" src={baseUrl(this.props.backdrop)} alt="Card image cap" />


// ${adress}${this.props.backdrop}
// import { baseUrl } from './helpers/stringHelper'