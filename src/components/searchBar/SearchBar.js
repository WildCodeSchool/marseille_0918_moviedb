import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'
import {baseUrl} from '../../helpers/stringHelpers'
import './SearchBar.css'
const APIKEY = "9a310b7d46fbc7e00fbc62646ecc790c";

export default class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchValue: '',
      movies: []
    }
  }

  getFilm(searchValue){
    this.setState({searchValue})
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&language=en-US&query=${searchValue}&page=1&include_adult=false`
    axios.get(url)
      .then(response  => {
        this.setState({movies: response.data.results});
    })
  }

  setSelectedMovie(movie){
    this.setState({searchValue: movie.title,  movies: [movie]})
  }
  
  render() {
    let {movies, searchValue} = this.state;
    console.log("IN SEARCHBAR RENDER", this.props)
    return (
      <div>
        <input
          className="searchBar"
          style={{caretColor: "red"}}
          type="search"
          name="searchBar"
          value={searchValue}
          onChange={(event) => this.getFilm(event.target.value)}
        />
        {
          movies.length > 0 &&
          movies[0].title != searchValue &&
          searchValue != '' &&
          <div>
            <ul>
              {
                movies.map((movie) => {
                  return (
                    
                    <li
                      className="listSearchBar"
                      key={movie.id}
                      style={{color: "white", cursor: 'pointer'}}
                      onClick={() => this.setSelectedMovie(movie)}
                    >
                    
                    <Link to={`/movie/${movie.id}`}>
                      <img 
                        className="imgSearchBar"
                        src={baseUrl(movie.backdrop_path)}
                      />
                        <p className="movieSearchBar">
                          {movie.title}
                        </p>
                    </Link>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        }
      </div>
    )
  }
}
