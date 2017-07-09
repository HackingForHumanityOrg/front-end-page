import React, { Component } from 'react';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

class LocationList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      service: '',
      time: '',
      email: '',
      password: '',
      list: [],
      request_data: '',
      request: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRequest = this.handleRequest.bind(this);
  }

  componentWillMount() {
    document.body.style.background = "white";
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
    this.setState({
      address: event.target.address,
      service: event.target.service,
      time: event.target.time,
    });
  }

  handleSubmit(event) {
    alert('Attempt to login as ' + this.state.email);
    event.preventDefault();
  }

  handleRequest(value) {
    this.setState({
      request_data: value,
      request: true
    });
  }

  render() {
    // variable holding the location list
    const lists = this.state.list.map((item, i) => {
      return (
        <article key={i} onClick={()=>this.handleRequest(item)} value={item}>
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
        <section id="list">{ lists }</section>
        <section id="map"><GoogleMap coordinates={this.state.request_data} /></section>
      </main>
    );
  }
}




const params = {v: '3.exp', key: 'AIzaSyD59dtHfFywOZus15LH00c45khguXs99nM'};
class GoogleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 37.679778,
      lng: -122.474415
    }
  }

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  }
  onDragEnd(e) {
    console.log('onDragEnd', e);
  }
  onCloseClick() {
    console.log('onCloseClick');
  }
  onClick(e) {
    console.log('onClick', e);
  }

  render() {
    // if(this.props.coordinates) {
    //       return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address={props.location_address},+{props.location_city},+CA&key=AIzaSyAxlxK_wU7C93Kmi3MVfMmKK-B-Y1j4VtQ`, {
    //         method: 'GET',
    //       }).then(res => {
    //         return res.json()
    //       }).then (data => {
    //         alert(data)
    //       });
    // }
    return (
      <Gmaps
        width={'400px'}
        height={'500px'}
        lat={this.state.lat}
        lng={this.state.lng}
        zoom={12}
        loadingMessage={'Loading map...'}
        params={params}
        onMapCreated={this.onMapCreated}>
        <Marker
          lat={this.state.lat}
          lng={this.state.lng}
          draggable={true}
          onDragEnd={this.onDragEnd} />
        <InfoWindow
          lat={this.state.lat}
          lng={this.state.lng}
          content={this.props.coordinates.facility_name || "Free Clinic"}
          onCloseClick={this.onCloseClick} />
        <Circle
          lat={this.state.lat}
          lng={this.state.lng}
          radius={500}
          onClick={this.onClick} />
      </Gmaps>
    );
  }
}

export default LocationList;