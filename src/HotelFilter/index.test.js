import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import HotelFilter from './index';

import { HOTELS } from '../hotelData';

const FILTERS = [];
const HOTELLIST = HOTELS;

const updateFilters = (val) => {
  FILTERS = val;
};

const filterResults = () => {
  let filteredResults = [];

  if (FILTERS.length > 0) {
    filteredResults = HOTELS.filter(h => {
      return h.Facilities.some(v => (FILTERS.indexOf(v) >= 0 ));
    });
  } else {
    filteredResults = HOTELS;
  }

  HOTELLIST = filteredResults;
};

it('renders without crashing', () => {
  const component = renderer.create(
    <HotelFilter
      filters={FILTERS}
      updateFilters={updateFilters}
      filterResults={filterResults}
    />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('adds filter to filters arr', () => {
  const component = shallow(
    <HotelFilter
      filters={FILTERS}
      updateFilters={updateFilters}
      filterResults={filterResults}
    />,
  );

  component.instance().addFilter('car park');
  expect(FILTERS[0]).toBe('car park');
  expect(FILTERS.length).toBe(1);
});

it('adds removes filter from filters arr', () => {
  const component = shallow(
    <HotelFilter
      filters={FILTERS}
      updateFilters={updateFilters}
      filterResults={filterResults}
    />,
  );

  expect(FILTERS[0]).toBe('car park');
  expect(FILTERS.length).toBe(1);

  component.instance().removeFilter('car park');
  expect(FILTERS.length).toBe(0);
});
