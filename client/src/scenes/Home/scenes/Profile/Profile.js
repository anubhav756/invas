import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import {
  Grid,
  CircularProgress,
} from '@material-ui/core';
import { getAgent as _getAgent } from '../../../../services/agent';

class Profile extends Component {
  componentWillMount() {
    const { getAgent } = this.props;

    getAgent();
  }
  render() {
    const {
      agent: {
        isFetching,
        info: {
          name,
          designation,
          region,
        },
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
            <Grid container style={{ marginTop: 20 }}>
              <Grid item xs={6} sm={3}>Name:</Grid>
              <Grid item xs={6} sm={9}>{name}</Grid>
              <Grid item xs={6} sm={3}>Designation:</Grid>
              <Grid item xs={6} sm={9}>{designation}</Grid>
              <Grid item xs={6} sm={3}>Region:</Grid>
              <Grid item xs={6} sm={9}>{region}</Grid>
            </Grid>
        }
      </div>
    );
  }
}

Profile.propTypes = {
  agent: PropTypes.shape({
    isFetching: PropTypes.bool.isRequired,
    info: PropTypes.shape({
      name: PropTypes.string,
      designation: PropTypes.string,
      region: PropTypes.string,
    }),
  }).isRequired,
  getAgent: PropTypes.func.isRequired,
};

export default connect(
  ({ agent }) => ({ agent }),
  { getAgent: _getAgent },
)(Profile);
