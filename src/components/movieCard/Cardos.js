import React, { Component } from 'react'
import Cardo from './Cardo'

export default class Cardos extends Component {
constructor(props) {
    super(props);
    this.state = {
        movies: [],
    }
}

componentDidMount = () => { 
    
    fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=5db1cb3add526f8a1516b0e4b55c9404&language=fr&page=1")
    .then(response => response.json()) 
    .then(response => this.setState({movies:response.results}))

} 






render() {
    
    if(this.state.movies.length > 0){
        console.log("hello", this.state.movies)
        return (
        <div>
            {this.state.movies.map((item,index) => {
              if (index < 1 ) {
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
    return (
        <div>
          <h1>No users founds </h1>
        </div>
    )
    }
  
}


//fetch("https://api.themoviedb.org/3/discover/movie?api_key=5db1cb3add526f8a1516b0e4b55c9404&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1")
