import React, { Component } from 'react';

class LocationList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      service: '',
      time: '',
      email: '',
      password: '',
      list: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
      this.setState({list: data})
    }).catch(e => {
      this.setState({list: 'Request Failed: ' + e})
    });
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Attempt to login as ' + this.state.email);
    event.preventDefault();
  }

  handleRequest(event) {
    alert(event);
    event.preventDefault();
  }

  render() {
    // variable holding the location list
    const lists = this.state.list.map((item, i) => {
      return (
        <article key={i} onClick={this.handleRequest}>
          <h3>{item.facility_name}</h3>
          <p>{item.facility_type} | {item.services}</p>
          <address>
            {item.location_address}
            {item.location_city}
            {item.location_state}
          </address>
        </article>)
    });

    // actual output
    return (
      <main>
        <div id="banner">
          <section id="search-engine">
          <form>
            <input type="text" name="address" value={this.state.address} placeholder="San Francisco..." onChange={this.handleChange} />
            <input type="text" name="service" value={this.state.service} placeholder="All services..." onChange={this.handleChange} />
            <input type="text" name="time" value={this.state.time} placeholder="Any day..." onChange={this.handleChange} />
          </form>
          </section>
          <section id="login-register">
            <form onSubmit={this.handleSubmit} >
              <input type="text" name="email" value={this.state.email} placeholder="E-mail address"/>
              <input type="text" name="password" value={this.state.password} placeholder="Password"/>
              <input type="submit" value="Submit" />
            </form>
          </section>
        </div>
        <section>{ lists }</section>
      </main>
    );
  }
}

export default LocationList;