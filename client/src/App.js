import React, { Component } from 'react';
import { CssBaseline } from '@material-ui/core';
import './App.css';

class App extends Component {
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
      <div>
        <CssBaseline />
        <ul>
          {cities.map(city => <li key={city.name}> <b>{city.name}</b>: {city.population}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
