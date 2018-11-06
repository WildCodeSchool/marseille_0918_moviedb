import React, { Component } from 'react'
import './Footer.css'
import { Row } from 'reactstrap'

export default class Footer extends Component {
  render() {
    return (
      <Row className="englobFoot">
        <footer>
            <p className="textFooter">Powered by <a className="lienFooter" href="https://www.themoviedb.org/">TMBd</a> - <a className="lienFooter" href="https://wildcodeschool.fr/marseille/">
              Wild Code School Marseille</a> - Lien GIT - Designed by Les Poissons Rouges</p>
        </footer>
      </Row>
    )
  }
}
