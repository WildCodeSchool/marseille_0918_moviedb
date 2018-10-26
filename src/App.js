//This file host all the components of our application
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Homes from './components/shared/home/Homes';
import SearchBar from './components/searchBar/SearchBar';
import singleMovie from './components/movieCard/singleMovie';
import ContactForm from './components/contactForm/ContactForm';
import Footer from './components/shared/footer/Footer';
import { containerFluid } from 'reactstrap';


class App extends Component {

  render() {
    return (
      <containerFluid>
        <SearchBar/>
        <Homes/>
        <Switch>
          <Route exact path="/movie/:id" component={singleMovie} />
          <Route exact path="/contact-us" component={ContactForm} />
      </containerFluid>
    );
  }
}

export default App;