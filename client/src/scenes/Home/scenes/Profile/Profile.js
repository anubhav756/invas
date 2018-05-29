import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import {
  Grid,
  Typography,
  CircularProgress,
  Button,
  LinearProgress,
} from '@material-ui/core';
import { Storage } from '@material-ui/icons';

import { getAgent as _getAgent } from '../../../../services/agent';

class Profile extends Component {
  componentWillMount() {
    const { getAgent } = this.props;

    getAgent('testId');
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
        <Grid container justify="space-around" style={{ marginBottom: 8 }}>
          <Grid item>
            <Typography>{currentDate}</Typography>
          </Grid>
          <Grid item>
            <Typography>{currentTime}</Typography>
          </Grid>
        </Grid>
        {
          isFetching ?
            <CircularProgress /> :
            <Grid container>
              <Grid item xs={6}>
                <Grid container direction="column">
                  <Grid item>
                    <Typography variant="title">{name}</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="subheading">{designation}</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="caption">{region}</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <Grid container direction="column" spacing={16}>
                  <Grid item>
                    <Button variant="raised" color="secondary">
                      Database
                      <Storage style={{ marginLeft: 8 }} />
                    </Button>
                  </Grid>
                  <Grid item>
                    Progress: 50%
                    <LinearProgress variant="determinate" value={50} />
                  </Grid>
                </Grid>
              </Grid>
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
