//This file host all the components of our application
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import './App.css';
import Home from './components/shared/home/Homes';
import SearchBar from './components/searchBar/SearchBar';
import singleMovie from './components/movieCard/singleMovie';
import ContactForm from './components/contactForm/ContactForm';

export default class App extends Component {
  render() {
    return (
      <Container fluid>
        <Home />
        <SearchBar />
        <Switch>
          <Route exact path="/movie/:id" component={singleMovie} />
          <Route exact path="/contact-us" component={ContactForm} />
        </Switch>
      </Container>
    );
  }
}
