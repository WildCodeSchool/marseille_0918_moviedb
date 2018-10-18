import React, { Component } from "react"
import axios from 'axios';

class BarreRecherche extends Component {
  constructor(props) {
    super(props);
    this.state = { 
    // movies list after api call
    movies:[],
    // Input search value
    movieTitle: ''
    };

  }

  handleChange(e){
    console.log(e.target.value)
    this.setState({ movieTitle: e.target.value });
  };

  //getFilm = () => { 
    
   // fetch(https://api.themoviedb.org/3/search/movie?api_key=9a310b7d46fbc7e00fbc62646ecc790c&language=en-US&query=${this.state.value}&page=1&include_adult=false)
   // .then(response => response.json()) 
   // .then(response => this.setState({movies: response.results}))

  
  //}
  getFilm = () => {
    let url = "https://api.themoviedb.org/3/search/movie?api_key=9a310b7d46fbc7e00fbc62646ecc790c&language=en-US&query="+ this.state.movieTitle +"&page=1&include_adult=false"
    axios.get(url)
      .then(response  => {
        console.log(response)
          // const movie = data.results;
          this.setState({movies: response.data.results});

        })
        
    

  }



  

  
  
 

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>{this.state.Film}</h1>
        

        <label htmlFor="title">
          Titre de film :
          <input
            type="text"
            value={this.state.movieTitle}
            onChange={(e) => this.handleChange(e)}
          />
        </label>
        <div>
        <button
          onClick={() => this.getFilm()}
        >Voir la Fiche Film</button>
        </div>
        
      </div>
    );
  }
}

export default BarreRecherche;
