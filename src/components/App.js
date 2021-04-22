import React from "react";
import AddMovie from "./AddMovie";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
require("dotenv").config();

//console.log(process.env.REACT_APP_API_KEY)

class App extends React.Component {
  state = {
    movies: [],
    searchQuery: "",
  };

  async componentDidMount() {
    const baseURL = "http://localhost:3002/movies";
    const response = await fetch(baseURL);
    const data = await response.json();
    this.setState({ movies: data });
  }

  //AXIOS API
  deleteMovie = async (movie) => {
    await axios.delete(`http://localhost:3002/movies/${movie.id}`);

    const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);

    this.setState((state) => ({
      movies: newMovieList,
    }));
  };

  searchMovie = (e) => {
    this.setState({
      searchQuery: e.target.value,
    });
  };

  addMovie = async (movie) => {

    await axios.post('http://localhost:3002/movies/', movie)
    this.setState(state => ({
        movies:state.movies.concat(movie)
    }))
  }

  render() {
    let filteredMovies = this.state.movies.filter((movie) => {
      return (
        movie.name
          .toLowerCase()
          .indexOf(this.state.searchQuery.toLowerCase()) !== -1
      );
    });
    return (

        //Burada birden fazla component kullandigimiz icin render ediyoruz
        // Tek component olsaydi asagidaki AddMovie gibi direk component yazardik
      <Router>

        <div className="container">

            <Switch>
           

            <Route path="/" exact render={()=> (
            <React.Fragment>
            <div className="row">
                <div className="col-lg-12">
                  <SearchBar searchMovieProp={this.searchMovie} />
                </div>
            </div>
              
              <MovieList
                movies={filteredMovies}
                deleteMovieProp={this.deleteMovie}
              />
              </React.Fragment>

            )}>
          
            </Route>




            <Route path="/add" render={()=> (
            
            <AddMovie 
                onAddMovie = {(movie) => {this.addMovie(movie)}}
            />

            )}>
          
            </Route>

            

            
        </Switch>
         
        </div>
      </Router>
    );
  }
}

export default App;
