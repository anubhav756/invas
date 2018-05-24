import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import {
  AppBar,
  Tabs,
  Tab,
} from '@material-ui/core';
import {
  Person,
  LocationOn,
} from '@material-ui/icons';
import Profile from './scenes/Profile';
import TabContainer from './components/TabContainer';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
});

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeIndex = this.handleChangeIndex.bind(this);
  }
  handleChange(event, value) {
    this.setState({ value });
  }
  handleChangeIndex(value) {
    this.setState({ value });
  }
  render() {
    const { classes, theme } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={this.handleChange}
            fullWidth
            centered
          >
            <Tab icon={<Person />} label="Profile" />
            <Tab icon={<LocationOn />} label="Location" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}><Profile /></TabContainer>
          <TabContainer dir={theme.direction}>Coming soon...</TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.shape().isRequired,
  theme: PropTypes.shape().isRequired,
};

export default withStyles(styles, { withTheme: true })(Home);
