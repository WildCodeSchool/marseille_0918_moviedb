import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { baseUrl } from '../../helpers/stringHelpers';
import './SearchBar.css';
import { Row, Col } from 'reactstrap';
const APIKEY = "9a310b7d46fbc7e00fbc62646ecc790c";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      movies: []
    }
  }

  getFilm(searchValue) {
    this.setState({ searchValue })
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&language=en-US&query=${searchValue}&page=1&include_adult=false`
    axios.get(url)
      .then(response => {
        if (response.error) {
          alert(response.error)
        } else {
          this.setState({ movies: response.data.results });
        }
      })
  };

  setSelectedMovie(movie) {
    this.setState({ searchValue: movie.title, movies: [movie] })
  }

  render() {
    let { movies, searchValue } = this.state;
    return (
      <div>
        <input
          className="searchBar"
          style={{ caretColor: "grey" }}
          type="search"
          name="searchBar"
          placeholder="search for a movie in every languages"
          value={searchValue}
          onChange={(event) => this.getFilm(event.target.value)}
        />
        {
          movies.length > 0 &&
          movies[0].title != searchValue &&
          searchValue != '' &&
          <ul className="testBack">
            {
              movies.map((movie) => {
                return (
                  <li
                    className="listSearchBar"
                    key={movie.id}
                    style={{ color: "white", cursor: 'pointer' }}
                    onClick={() => this.setSelectedMovie(movie)}
                  >
                    <Link to={`/movie/${movie.id}`} className="alignInfoMovie">
                      <Row>
                        <Col>
                          <img className="imgSearchBar" src={baseUrl(movie.poster_path)} />
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <p className="movieSearchBar">
                            {movie.title}
                            <br />
                            {movie.release_date.split("-").reverse().join("-")}
                          </p>
                        </Col>
                      </Row>
                    </Link>
                  </li>
                )
              })
            }
          </ul>
          //message "no results found"
        }
      </div>
    )
  }
}
