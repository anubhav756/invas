import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CircularProgress } from '@material-ui/core';
import { getCities as _getCities } from '../../../../services/cities';

class Profile extends Component {
  componentWillMount() {
    const { getCities } = this.props;

    getCities();
  }
  render() {
    const {
      cities: {
        isFetching,
        cities,
      },
    } = this.props;

    if (isFetching) {
      return <CircularProgress />;
    }

    return (
      <ul>
        {cities.map(city => <li key={city.name}> <b>{city.name}</b>: {city.population}</li>)}
      </ul>
    );
  }
}

Profile.propTypes = {
  cities: PropTypes.shape({
    isFetching: PropTypes.bool.isRequired,
    cities: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      population: PropTypes.number.isRequired,
    })).isRequired,
  }).isRequired,
  getCities: PropTypes.func.isRequired,
};

export default connect(
  ({ cities }) => ({ cities }),
  { getCities: _getCities },
)(Profile);
