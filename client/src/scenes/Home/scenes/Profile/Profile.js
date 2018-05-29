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
  Checkbox,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from '@material-ui/core';
import {
  Storage,
  Add,
  Delete,
} from '@material-ui/icons';

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
            <Typography variant="caption">{currentDate}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="caption">{currentTime}</Typography>
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
                    <Typography variant="body2">Progress: 80%</Typography>
                    <LinearProgress variant="determinate" value={80} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6} style={{ marginTop: 32 }}>
                <Grid container>
                  <Grid item>
                    <Typography variant="display1">Todo:</Typography>
                  </Grid>
                  <Grid item style={{ marginLeft: 8 }}>
                    <Button variant="fab" mini color="primary"><Add /></Button>
                  </Grid>
                </Grid>
                <List style={{ marginRight: 32 }}>
                  <ListItem button>
                    <Checkbox disableRipple />
                    <ListItemText primary="Lorem ipsum dolor sit amet 1" secondary="11:00 am - 12:00 pm" />
                    <ListItemSecondaryAction>
                      <IconButton color="secondary">
                        <Delete />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                  <ListItem button>
                    <Checkbox disableRipple />
                    <ListItemText primary="Lorem ipsum dolor sit amet 2" secondary="12:00 pm - 3:30 pm" />
                    <ListItemSecondaryAction>
                      <IconButton color="secondary">
                        <Delete />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                  <ListItem button>
                    <Checkbox disableRipple />
                    <ListItemText primary="Lorem ipsum dolor sit amet 3" secondary="3:30 pm - 4:00 pm" />
                    <ListItemSecondaryAction>
                      <IconButton color="secondary">
                        <Delete />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={6} style={{ marginTop: 32 }}>
                <Grid container>
                  <Grid item>
                    <Typography variant="display1">Report:</Typography>
                  </Grid>
                  <Grid item style={{ marginLeft: 8 }}>
                    <Button variant="fab" mini color="primary"><Add /></Button>
                  </Grid>
                </Grid>
                <List style={{ marginRight: 32 }}>
                  <ListItem button>
                    <Checkbox disableRipple />
                    <ListItemText primary="Lorem ipsum dolor sit amet 1" />
                    <ListItemSecondaryAction>
                      <IconButton color="secondary">
                        <Delete />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                  <ListItem button>
                    <Checkbox disableRipple />
                    <ListItemText primary="Lorem ipsum dolor sit amet 2" />
                    <ListItemSecondaryAction>
                      <IconButton color="secondary">
                        <Delete />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                </List>
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
