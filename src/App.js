//This file host all the components of our application
import React, { Component } from 'react';
import './App.css';
import BarreRecherche from './BarreRecherche';

class App extends Component {

  render() {
    return (

      <div className="App">
        <BarreRecherche />
      </div>   

    );
  }
}

export default App;