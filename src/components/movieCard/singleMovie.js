import React, { Component } from 'react'
import Cardo from './Cardo';

export default class singleMovie extends Component {
  constructor(props){
    super(props);
    this.state = {
      movie: {},
      currentMovieId: null,
      detail: {},
      directorName:null,
    }
  }

  componentDidMount(){
    this.fetchMovieById(this.props.match.params.id)
    this.fetchMovieByDetail(this.props.match.params.id) 
  }

  getDirector(details){
    let crewArray = details.crew;
     for (let i = 0; crewArray.length > i ; i ++){
       let member = crewArray[i];
      if(member.job === "Director"){
        return member.name
      }   
    }    
  }

  fetchMovieById(){
    fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=5db1cb3add526f8a1516b0e4b55c9404&language=en`)
    .then(response => response.json()) 
    .then(response => this.setState({movie: response, currentMovieId: response.id}))
  }

  fetchMovieByDetail(movieid){
    fetch(` https://api.themoviedb.org/3/movie/${movieid}/credits?api_key=9a310b7d46fbc7e00fbc62646ecc790c&language=en=US`)
    .then(responsetwo => responsetwo.json()) 
    .then(responsetwo => {
      let fetchname = this.getDirector(responsetwo)

      return this.setState({detail: responsetwo, directorName : fetchname})
    })
  }
  
  render() {
    if(this.props.match.params.id != this.state.currentMovieId){
      this.fetchMovieById(this.props.match.params.id)
    }
    console.log(this.state.movie.release_date)
    console.log(this.state.directorName)
    
    return (
      <div>
        <Cardo 
          movie={this.state.movie} 
          releaseDate={this.state.movie.release_date}
          directorName={this.state.directorName}/>
      </div>
    )
  }
}
