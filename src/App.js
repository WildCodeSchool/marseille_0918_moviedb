//This file host all the components of our application
import React, { Component } from 'react';
import './App.css';
import MovieCard from './components/movieCard/MovieCard';
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



//import { BrowserRouter, Route, NavLink, Switch} from 'react-router-dom';

// <div>
//       <BrowserRouter>
//         <ul> 
//           <li>
//             <NavLink  
//                 exact to="/"
//                ><button>Click Here !!</button></NavLink>
//           </li>
          
          
            
//           <li>
//               <NavLink
//                  to="/moviecard" 
//                 >MovieCard</NavLink>
//             </li>
//         </ul>
     
//         <Switch>     
//           <Route exact path="/" component={Home}/> 
//           <Route path="/moviecard" component={MovieCard}/> 
//         </Switch>
     
//       </BrowserRouter>
//     </div>