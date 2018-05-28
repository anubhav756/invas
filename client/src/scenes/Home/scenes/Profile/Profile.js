import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import {
  Grid,
  CircularProgress,
} from '@material-ui/core';
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
    const currentDate = moment().format('dddd, MMMM Do YYYY');
    const currentTime = moment().format('h:mm a');

    return (
      <div>
        <Grid container justify="space-around">
          <Grid item>{currentDate}</Grid>
          <Grid item>{currentTime}</Grid>
        </Grid>
        {
          isFetching ?
            <CircularProgress /> :
            <ul>
              {cities.map(city => <li key={city.name}> <b>{city.name}</b>: {city.population}</li>)}
            </ul>
        }
      </div>
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
