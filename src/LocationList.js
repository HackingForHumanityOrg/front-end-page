import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Well } from 'react-bootstrap';

function LocationList(props) {
  return (
    <section className="center-block">
      <ListGroup>
        <ListGroupItem bsStyle="info">{props.address}</ListGroupItem>
      </ListGroup>
      <Well>Look I'm in a well!</Well>
    </section>
  );
}

export default LocationList;