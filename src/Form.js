import React, { Component } from 'react';
import { Col, FormGroup, InputGroup, FormControl, Glyphicon } from 'react-bootstrap';
import LocationList from './LocationList';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({submitted: true});

  }

  render() {
    if (this.state.submitted) {
        return <LocationList address={this.state.value} />;
    } else {
      return (
        <form onSubmit={this.handleSubmit} className="center-block">
        <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              value={this.state.value}
              placeholder="Address"
              onChange={this.handleChange}/>
            <InputGroup.Addon>
              <Glyphicon glyph="map-marker" />
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
        </form>
      );
    }
  }
}

export default Form;