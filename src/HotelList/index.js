import React, { Component, Fragment } from 'react';
import { ListGroup, ListGroupItem, Label } from 'react-bootstrap';

const HotelList = ({ listHotels }) => {

  const hotelItems = listHotels.map((h, i) => (
    <ListGroupItem key={i} header={`${h.Name} - ${h.StarRating} stars`}>
      { h.Facilities.map((f, ind) => (
        <Fragment key={ind}>
          <Label>{ f }</Label>{ ' ' }
        </Fragment>
      )) }
    </ListGroupItem>
  ));

  return (
    <ListGroup>
      { hotelItems }
    </ListGroup>
  )
};

export default HotelList;
