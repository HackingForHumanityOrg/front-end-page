import React, { Component } from 'react';
import { Jumbotron, Well } from 'react-bootstrap';

class LocationList extends Component {
  constructor(props) {
    super(props);
    this.state = {location: []};
  }

  componentDidMount() {
    this.ListData();
  }

  ListData() {
    return fetch(`https://data.sfgov.org/resource/sci7-7q9i.json?facility_type='Free Clinic'`, {
      method: 'GET',
    }).then(res => {
      return res.json()
    }).then (data => {
      this.setState({location: data})
    }).catch(e => {
      this.setState({location: 'Request Failed: ' + e})
    });
  }

  render() {
    const locations = this.state.location.map((item, i) => {
      return (
        <Well key={i}>
          <h3>{item.facility_name}</h3>
          <span>{item.facility_type}</span>
        </Well>)
    });

    return (
      <main>
        <Header />
        <section>{ locations }</section>
      </main>
    );
  }
}

function Header() {
  return (
    <div id="banner">
      <section id="search-engine">Test</section>
      <section id="login-register">Test</section>
    </div>
  );
}


export default LocationList;