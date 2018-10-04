import React from "react";

const FicheFilm = ({ poster_path, title, director, release_date, country, id, overview }) => (
  <div className="CardFilm">
    <img src={poster_path}/>
	    <ul>
	    	<li>{title}</li>
	    	<li>{director}</li>
	    	<li>{release_date}</li>
	    	<li>{country}</li>
	    	<li>{id}</li>
	    </ul>
    <p>{overview}</p>
  </div>
);

export default FicheFilm;




