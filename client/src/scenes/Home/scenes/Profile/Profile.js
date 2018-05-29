import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
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
  constructor(props) {
    super(props);

    this.state = {
      todosChecked: [],
      reportsChecked: [],
    };
  }
  componentWillMount() {
    const { getAgent } = this.props;

    getAgent('testId');
  }
  toggleTodo(value) {
    const { todosChecked } = this.state;
    const currentIndex = _.indexOf(todosChecked, value);
    const newTodosChecked = [...todosChecked];

    if (currentIndex === -1) {
      newTodosChecked.push(value);
    } else {
      newTodosChecked.splice(currentIndex, 1);
    }

    this.setState({
      todosChecked: newTodosChecked,
    });
  }
  toggleReport(value) {
    const { reportsChecked } = this.state;
    const currentIndex = _.indexOf(reportsChecked, value);
    const newReportsChecked = [...reportsChecked];

    if (currentIndex === -1) {
      newReportsChecked.push(value);
    } else {
      newReportsChecked.splice(currentIndex, 1);
    }

    this.setState({
      reportsChecked: newReportsChecked,
    });
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
    const {
      todosChecked,
      reportsChecked,
    } = this.state;
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
                  {_.map([0, 1, 2], id => (
                    <ListItem key={id} button onClick={() => this.toggleTodo(id)}>
                      <Checkbox disableRipple checked={_.indexOf(todosChecked, id) !== -1} />
                      <ListItemText primary="Lorem ipsum dolor sit amet 1" secondary="11:00 am - 12:00 pm" />
                      <ListItemSecondaryAction>
                        <IconButton color="secondary">
                          <Delete />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  ))}
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
                  {
                    _.map([0, 1], id => (
                      <ListItem key={id} button onClick={() => this.toggleReport(id)}>
                        <Checkbox disableRipple checked={_.indexOf(reportsChecked, id) !== -1} />
                        <ListItemText primary="Lorem ipsum dolor sit amet 1" />
                        <ListItemSecondaryAction>
                          <IconButton color="secondary">
                            <Delete />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                    ))
                  }
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
