function baseUrl(poster_path) {
  return "https://image.tmdb.org/t/p/w500" + poster_path
}

module.exports= {
  baseUrl:baseUrl
}