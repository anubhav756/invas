import React, { Component } from 'react';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cities: [],
    };
  }
  async componentWillMount() {
    const response = await fetch('/api/v1/cities');
    const cities = await response.json();

    this.setState({ cities });
  }
  render() {
    const { cities } = this.state;

    return (
      <ul>
        {cities.map(city => <li key={city.name}> <b>{city.name}</b>: {city.population}</li>)}
      </ul>
    );
  }
}

export default Profile;
