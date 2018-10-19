import React, { Component } from 'react'
import Cardo from './Cardo';

export default class singleMovie extends Component {
  constructor(props){
    super(props);
    this.state = {
      movie: {},
      currentMovieId: null
    }
  }

  componentDidMount(){
    this.fetchMovieById()
  }

  fetchMovieById(){
    fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=5db1cb3add526f8a1516b0e4b55c9404&language=fr`)
    .then(response => response.json()) 
    .then(response => this.setState({movie: response, currentMovieId: response.id}))
  }
  
  render() {
    if(this.props.match.params.id != this.state.currentMovieId){
      this.fetchMovieById()
    }
    console.log(this.state.movie.release_date)
    return (
      <div>
        <Cardo movie={this.state.movie} releaseDate={this.state.movie.release_date}/>
      </div>
    )
  }
}
