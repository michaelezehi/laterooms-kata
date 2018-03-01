import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import HotelSort from './index';

import { HOTELS } from '../hotelData.js';

// TODO - move into mocks

let SORTQUERY = 'StarRating|desc';

const updateSort = (val) => {
  SORTQUERY = val;
};

it('renders without crashing', () => {
  const component = renderer.create(
    <HotelSort updateSort={updateSort} />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('sorts results', () => {
  const component = shallow(
    <HotelSort updateSort={updateSort} />,
  );

  expect(HOTELS[0].Name).toBe('hotelone');
  component.instance().handleSort({ target: 'StarRating|asc' });
  expect(HOTELS[1].Name).toBe('hoteltwo');

});
