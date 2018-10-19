//This file host all the components of our application
import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink, Switch} from 'react-router-dom';
import './App.css';
import Home from './Home';
import MovieCard from './components/movieCard/MovieCard';


class App extends Component {

  render() {
    return (
      
      <div>
      <BrowserRouter>
        <ul> 
          <li>
            <NavLink  
                exact to="/"
               ><button>Click Here !!</button></NavLink>
          </li>
          
          
            
          <li>
              <NavLink
                 to="/moviecard" 
                >MovieCard</NavLink>
            </li>
        </ul>
     
        <Switch>     
          <Route exact path="/" component={Home}/> 
          <Route path="/moviecard" component={MovieCard}/> 
        </Switch>
     
      </BrowserRouter>
    </div>
    );
  }
}

export default App;