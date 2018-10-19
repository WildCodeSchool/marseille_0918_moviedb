//This file host all the components of our application
import React, { Component } from 'react';
import './App.css';
import Home from './components/shared/home/Homes';

class App extends Component {

  render() {
    return (

      <div className="App">
        <Home />
      </div>   

    );
  }
}

export default App;