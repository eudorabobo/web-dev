import React, {useEffect, useState} from "react";

const MovieApiClient = () => {
    const [movies, setMovies] = useState([]);
    const [movie, setMovie] = useState({title: '', rating: 2.5});
    const onMovieTitleChange = (event) => {
        setMovie({...movie, title: event.target.value});
        // console.log(movie);
    }
    const createMovieClickHandler = () => {

        fetch('https://lit-ridge-22629.herokuapp.com/api/movies', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(movie),

        })
            .then(response => response.json())
            .then(movies => setMovies(movies))
    }
    const saveMovie = () => {
        // console.log(JSON.stringify(movie));
        // console.log(movie._id);
        let body = JSON.stringify(movie);
        fetch(`https://lit-ridge-22629.herokuapp.com/api/movies/${movie._id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: body

        })
            .then(response => response.json())
            .then(movies => setMovies((movies)));
    }
    const deleteMovie = (movie) => {
        let id = movie._id;
        fetch(`https://lit-ridge-22629.herokuapp.com/api/movies/${id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(movies => setMovies(movies));
    };
    useEffect(() => {
        fetch('https://lit-ridge-22629.herokuapp.com/api/movies')
            .then(response => response.json())
            .then(movies => setMovies(movies))
    },[]);
    return (
      <div>
          <h2>Movies</h2>
          <ul className="list-group">
              <li className="list-group-item">
                  <button
                      onClick={createMovieClickHandler}
                      className="btn btn-success float-end">
                      Create
                  </button>
                  <button onClick={saveMovie}
                        className="btn btn-primary ms-2 float-end">
                      Save
                  </button>
                  <input className="form-control"
                         value={movie.title}
                         onChange={onMovieTitleChange}
                         style={{width: "70%"}}/>
              </li>

              {
                  movies.map((movie) =>
                  <li className="list-group-item" key={movie._id}>
                      {movie.title} {movie.rating};
                      <button onClick={() => setMovie(movie)}
                            className="btn btn-primary float-end ms-2">
                          Edit
                      </button>
                      <button onClick={() => deleteMovie(movie)}
                              className="btn btn-danger float-end">
                          Delete
                      </button>
                  </li>
                  )
              }
          </ul>
      </div>
    );
};

export default MovieApiClient;