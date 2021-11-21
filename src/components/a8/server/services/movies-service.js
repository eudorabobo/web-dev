let movies = require("../data/movies.json");

module.exports = (app) => {
  const getAllMovies = (req, res) => res.json(movies);
  const deleteMovie = (req, res) => {
    const id = req.params.mid;
    movies = movies.filter(m => m._id !== id);
    res.json(movies);
  };
  const createMovie = (req, res) => {
    const content = req.body;
    const movie = {
      _id: (new Date()).getTime() + '',
      title: content.title,
      rating: content.rating
    }
    movies = [...movies, movie];
    res.json(movies);
  }
  const saveMovie = (req, res) => {
    // console.log(req.body);
    // const newMovie = JSON.parse(req.body);
    // console.log(newMovie)
    const movieId = req.params['mid'];
    // console.log(movieId)
    movies = movies.map(movie =>
        movie._id === movieId ? req.body : movie);
    // console.log(movies);
    res.json(movies);
  }
  app.put('/api/movies/:mid', saveMovie);
  app.delete('/api/movies/:mid', deleteMovie);
  app.get('/api/movies', getAllMovies);
  app.post('/api/movies', createMovie);
};
