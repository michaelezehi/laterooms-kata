import React, { Component } from 'react';
import { func } from 'prop-types';

import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class HotelSort extends Component {

  static propTypes = {
    updateSort: func.isRequired,
  }

  handleSort(e) {
    this.props.updateSort(e.target.value);
  }

  render() {
    return (
      <FormGroup controlId="hotelSort">
        <ControlLabel>Sort:</ControlLabel>
        <FormControl
          componentClass="select"
          onChange={this.handleSort.bind(this)}
        >
          <option value="StarRating|desc">Star Rating Desc</option>
          <option value="StarRating|asc">Star Rating Asc</option>
        </FormControl>
      </FormGroup>
    );
  }
}

export default HotelSort;
