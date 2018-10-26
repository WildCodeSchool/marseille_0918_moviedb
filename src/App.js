//This file host all the components of our application
import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './components/shared/home/Homes';
import SearchBar from './components/searchBar/SearchBar';
import singleMovie from './components/movieCard/singleMovie';
import ContactForm from './components/contactForm/ContactForm';
import { containerFluid } from 'reactstrap';


class App extends Component {

  render() {
    return (
      <containerFluid>
        <Home/>
        <SearchBar/>
        <ContactForm/>
        <Switch>
            <Route exact path="/movie/:id" component={singleMovie} />
        </Switch>  
      </containerFluid>
    );
  }
}

export default App;