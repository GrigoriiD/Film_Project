import React from 'react';

export default class Search extends React.Component {
  state = {
    search: '',
    type: 'all',
  };
  handleKey = (e) => {
    if (e.key === 'Enter') {
      this.props.serchProd(this.state.search,this.state.type);
    }
  };
  handleFilter = (e) => {
        this.setState(() =>({ type: e.target.dataset.type }),
        () => {this.props.serchProd(this.state.search,this.state.type)
        });
    }
  render() {
    return (
      <div className="row">
        <div className="input-field search__input">
          <input
            id="search"
            onChange={(e) => this.setState({ search: e.target.value })}
            value={this.state.search}
            type="search"
            className="validate"
            placeholder="Search.."
            onKeyDown={this.handleKey}
          />
          <button
            className="btn search__btn"
            onClick={() => {
              this.props.serchProd(this.state.search,this.state.type);
            }}
          >
            Search
          </button>
        </div>
        <div className="filter-film">
          <label>
            <input
              name="type"
              type="radio"
              data-type="all"
              onChange={this.handleFilter}
              checked={this.state.type === 'all'}
            />
            <span>All</span>
          </label>
          <label>
            <input
              name="type"
              type="radio"
              data-type="movie"
              onChange={this.handleFilter}
              checked={this.state.type === 'movie'}
            />
            <span>Films only</span>
          </label>
          <label>
            <input
              name="type"
              type="radio"
              data-type="series"
              onChange={this.handleFilter}
              checked={this.state.type === 'series'}
            />
            <span>Series only</span>
          </label>
        </div>
      </div>
    );
  }
}
