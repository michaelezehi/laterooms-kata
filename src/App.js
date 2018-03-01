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
      hotelList: HOTELS,
      filters: [],
    }
  }

  updateFilters(val) {
    this.setState({ filters: val });
  }

  sortResults(sortQuery = 'StarRating|desc') {

    const sortedResults = this.state.hotelList;
    const sortVals = sortQuery.split('|');

    sortedResults.sort((a, b) => {
      if (sortVals[1] === 'asc') {
        return a[sortVals[0]] - b[sortVals[0]];
      }

      if (sortVals[1] === 'desc') {
        return b[sortVals[0]] - a[sortVals[0]];
      }
    });

    this.setState({ hotelList: sortedResults });
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

    this.setState({ hotelList: filteredResults });
  }

  render() {
    return (
      <div className="App">
        <HotelFilter
          filters={this.state.filters}
          updateFilters={this.updateFilters.bind(this)}
          filterResults={this.filterResults.bind(this)}
        />
        <HotelSort
          sortResults={this.sortResults.bind(this)}
        />
        <HotelList listHotels={this.state.hotelList} />
      </div>
    );
  }
}

export default App;
