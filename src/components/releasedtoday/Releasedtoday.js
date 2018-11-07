import React, { Component } from 'react'

import Carday from '../movieCard/Carday'

export default class Releasedtoday extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oftheday: [],
      currentMovieId: null,
      date: '',
    }
  }

  whatsTheDate = () => {

    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //January is 0!
    let yyyy = today.getFullYear();

    if (dd < 10) {
      dd = '0' + dd
    }

    if (mm < 10) {
      mm = '0' + mm
    }

    today = `${yyyy}-${mm}-${dd}`

    return today

  }

  
  componentDidMount = () => {
    this.setState({ date: this.whatsTheDate() })
    this.fetchMovieOfTheDay()
  
  }

  
   
  fetchMovieOfTheDay = () => {
  
    let url =  `https://api.themoviedb.org/3/discover/movie?api_key=9a310b7d46fbc7e00fbc62646ecc790c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=${this.whatsTheDate()}&primary_release_date.lte=${this.whatsTheDate()}&release_date.gte=${this.whatsTheDate()}`
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ oftheday: data.results, currentMovieId: data.results.id }))
     
      .catch(error => {
        alert("oups, rechargez la page !")
      })
      console.log("whit", this.state.oftheday)
      
  }


  render() {
    
    if(this.state.oftheday.length > 0){
      console.log("what", this.state.oftheday)
      console.log("ID", this.state.currentMovieId)


      
      
      


        return (
            <div>
            {this.state.oftheday.map((item, index) => {
  
              if (index < 100 && item.overview !== "") {
                    return <Carday
                       movId={item.id}
                       key={index}
                       title={item.title}
                       date={item.release_date}
                       resume={item.overview}
                       vote={item.vote_average}
                       voteco={item.vote_count}
                       poster={item.poster_path}
                        />
                        
                    }
                })
            }
        </div>
    )}
        return (
            <div>
                <h1>Patience !</h1>
            </div>
        )
    }
  

}
 

