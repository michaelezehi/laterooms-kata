import React, { Component } from 'react';
import './App.css';

import { FormGroup, Checkbox } from 'react-bootstrap';

import { HOTELS } from './hotelData';
import HotelList from './HotelList/';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HotelList listHotels={HOTELS} />
      </div>
    );
  }
}

export default App;
