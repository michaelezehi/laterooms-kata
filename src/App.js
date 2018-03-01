import React, { Component } from 'react';
import './App.css';

import { HOTELS } from './hotelData';
import HotelFilter from './HotelFilter/';
import HotelSort from './HotelSort';
import HotelList from './HotelList/';

class App extends Component {
  constructor() {
    super();

    this.state = {
      filters: [],
      sortQuery: 'StarRating|desc'
    }
  }

  updateFilters(val) {
    this.setState({ filters: val });
  }

  updateSort(val) {
    this.setState({ sortQuery: val });
  }

  sortResults(results) {

    const sortVals = this.state.sortQuery.split('|');

    results.sort((a, b) => {
      if (sortVals[1] === 'asc') {
        return a[sortVals[0]] - b[sortVals[0]];
      }

      if (sortVals[1] === 'desc') {
        return b[sortVals[0]] - a[sortVals[0]];
      }
    });

    return results;
  }

  filterResults() {

    let filteredResults = [];

    if (this.state.filters.length > 0) {
      filteredResults = HOTELS.filter(h => {
        return h.Facilities.some(v => (this.state.filters.indexOf(v) >= 0 ));
      });
    } else {
      filteredResults = HOTELS;
    }

    return filteredResults;
  }

  render() {

    const filteredResults = this.filterResults();
    const updatedResults = this.sortResults(filteredResults);

    return (
      <div className="App">
        <HotelFilter
          filters={this.state.filters}
          updateFilters={this.updateFilters.bind(this)}
        />
        <HotelSort
          updateSort={this.updateSort.bind(this)}
        />
        <HotelList listHotels={updatedResults} />
      </div>
    );
  }
}

export default App;
