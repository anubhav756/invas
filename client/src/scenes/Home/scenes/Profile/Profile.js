import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import {
  Grid,
  Typography,
  CircularProgress,
  Card,
  CardHeader,
  Avatar,
  IconButton,
} from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { Cloud } from '@material-ui/icons';

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
        <Grid container justify="space-around" style={{ marginBottom: 8 }}>
          <Grid item>
            <Typography variant="caption">{currentDate}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="caption">{currentTime}</Typography>
          </Grid>
        </Grid>
        {
          isFetching ?
            <CircularProgress /> :
            <Card>
              <CardHeader
                avatar={<Avatar style={{ background: red[500] }}>A</Avatar>}
                title={name}
                subheader={`${designation} - ${region}`}
                action={
                  <IconButton>
                    <Cloud />
                  </IconButton>
                }
              />
            </Card>
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
