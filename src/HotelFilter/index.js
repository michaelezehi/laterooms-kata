import React, { Component } from 'react';
import { array, func } from 'prop-types';

import { FormGroup, Checkbox } from 'react-bootstrap';

class HotelFilter extends Component {

  static propTypes = {
    filters: array.isRequired,
    updateFilters: func.isRequired,
    filterResults: func.isRequired,
  };

  addFilter(value) {
    const filtersArr = this.props.filters;

    const valueIndex = filtersArr.indexOf(value);

    // Only add filter if not already present
    if (valueIndex === -1) {
      filtersArr.push(value);
    }

    return filtersArr;
  }

  removeFilter(value) {
    const filtersArr = this.props.filters;

    const valueIndex = filtersArr.indexOf(value);

    if (valueIndex !== -1) {
      filtersArr.splice(valueIndex, 1);
    }

    return filtersArr;
  }

  handleFilterChange() {
    if (this.carParkActive.checked) {
      this.props.updateFilters(this.addFilter('car park'));
    } else {
      this.props.updateFilters(this.removeFilter('car park'));
    }

    if (this.poolActive.checked) {
      this.props.updateFilters(this.addFilter('pool'));
    } else {
      this.props.updateFilters(this.removeFilter('pool'));
    }

    if (this.gymActive.checked) {
      this.props.updateFilters(this.addFilter('gym'));
    } else {
      this.props.updateFilters(this.removeFilter('gym'));
    }

    this.props.filterResults();
  }

  render() {
    return (
      <FormGroup>
        <Checkbox onChange={this.handleFilterChange.bind(this)} inputRef={ref => { this.carParkActive = ref; }} inline>Car Park</Checkbox>
        <Checkbox onChange={this.handleFilterChange.bind(this)} inputRef={ref => { this.poolActive = ref; }} inline>Pool</Checkbox>
        <Checkbox onChange={this.handleFilterChange.bind(this)} inputRef={ref => { this.gymActive = ref; }} inline>Gym</Checkbox>
      </FormGroup>
    )
  }
}

export default HotelFilter;
