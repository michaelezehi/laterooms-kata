import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import HotelSort from './index';

import { HOTELS } from '../hotelData.js';

// TODO - move into mocks
const sortResults = (sortQuery = 'StarRating|desc') => {
  const sortedResults = HOTELS;
  const sortVals = sortQuery.split('|');

  sortedResults.sort((a, b) => {
    if (sortVals[1] === 'asc') {
      return a[sortVals[0]] - b[sortVals[0]];
    }

    if (sortVals[1] === 'desc') {
      return b[sortVals[0]] - a[sortVals[0]];
    }
  });

  return sortedResults;
};

it('renders without crashing', () => {
  const component = renderer.create(
    <HotelSort sortResults={sortResults} />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('sorts results', () => {
  const component = shallow(
    <HotelSort sortResults={sortResults} />,
  );

  expect(HOTELS[0].Name).toBe('hotelone');
  component.instance().handleSort({ target: 'StarRating|asc' });
  expect(HOTELS[1].Name).toBe('hoteltwo');

});
