import React, { Component } from "react"
import axios from 'axios';
import Cardo from './Cardo'

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
    if(this.state.movies.length > 0){
      console.log("hello", this.state.movies)
      return (
      <div className="movycard">
          {this.state.movies.map((item,index) => {
            if (index < 1) {
              return <Cardo
                     key={index}
                     title={item.title}
                     date={item.release_date}
                     resume={item.overview}
                     vote={item.vote_average}
                     voteco={item.vote_count}
                     backdrop={item.backdrop_path}
                      />
              }
          })
      }
      
    
  </div>
  )}


    console.log(this.state);
    return (
      <section>
    
        

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
        <cardos/>
        
      </section>
    );
  }
}

export default BarreRecherche;