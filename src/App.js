import React, { Component } from 'react';
import './App.css';

import { HOTELS } from './hotelData';
import HotelFilter from './HotelFilter/';
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
        <br /><br />
        <HotelList listHotels={this.state.hotelList} />
      </div>
    );
  }
}

export default App;
