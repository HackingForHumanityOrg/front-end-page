import React, { Component } from 'react';
import { FormGroup, InputGroup, FormControl, Glyphicon } from 'react-bootstrap';
import LocationList from './LocationList';
import './App.css';

class App extends Component {
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
      return (
        <main>
          <LocationList address={this.state.value} />
        </main>
      );
    } else {
      return (
        <main>
          <header>
            <h2>Wellness For All</h2>
            <p>Find a women's health service near you!</p>
          </header>
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
        </main>
      );
    }
  }
}

export default App;