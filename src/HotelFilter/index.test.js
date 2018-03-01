import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import HotelFilter from './index';

import { HOTELS } from '../hotelData';

// TODO - move to mocks
const FILTERS = [];
const HOTELLIST = HOTELS;

const updateFilters = (val) => {
  FILTERS = val;
};

it('renders without crashing', () => {
  const component = renderer.create(
    <HotelFilter
      filters={FILTERS}
      updateFilters={updateFilters}
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
    />,
  );

  expect(FILTERS[0]).toBe('car park');
  expect(FILTERS.length).toBe(1);

  component.instance().removeFilter('car park');
  expect(FILTERS.length).toBe(0);
});
