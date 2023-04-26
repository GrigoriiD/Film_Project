import React from 'react';
import Movies from '../Movies.jsx';
import Preloader from '../Preloader.jsx';
import Search from '../Search.jsx';

const API_KEY = 'bc1ec4a';
export default class Main extends React.Component {
  state = {
    movies: [],
    loading: true,
  };
  componentDidMount() {
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=Top`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ movies: data.Search, loading: false });
      });
  }
  serchProd = (str, type) => {
    this.setState({ loading: true });
    fetch(
      `http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${
        str ? str : 'Popular'
      }${type !== 'all' ? `&type=${type}` : ''}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ movies: data.Search, loading: false });
      });
  };
  render() {
    return (
      <main className="container main-content">
        <Search serchProd={this.serchProd} />
        {this.state.loading ? (
          <Preloader />
        ) : (
          <Movies movies={this.state.movies} />
        )}
      </main>
    );
  }
}
