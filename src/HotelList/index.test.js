import React from 'react';
import renderer from 'react-test-renderer';
import HotelList from './index';

import { HOTELS } from '../hotelData';

it('renders without crashing', () => {
  const component = renderer.create(
    <HotelList listHotels={HOTELS} />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
