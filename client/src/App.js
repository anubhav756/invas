import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    cities: []
  }
  async componentDidMount() {
    const response = await fetch('/api/v1');
    const cities = await response.json();

    this.setState({ cities });
  }
  render() {
    const { cities } = this.state;

    return (
      <div>
        <ul>
          {cities.map(city => {
            return <li key={city.name}> <b>{city.name}</b>: {city.population}</li>
          })}
        </ul>
      </div>
    );
  }
}

export default App;
