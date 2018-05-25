import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import _ from 'lodash';
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

const routeToTabMap = [
  '/profile',
  '/location',
];

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
    };

    this.handleChange = this.handleChange.bind(this);
  }
  componentWillMount() {
    const {
      location: {
        pathname,
      },
    } = this.props;

    this.setState({ value: _.indexOf(routeToTabMap, pathname) });
  }
  componentWillReceiveProps(nextProps) {
    const {
      location: {
        pathname,
      },
    } = nextProps;

    this.setState({ value: _.indexOf(routeToTabMap, pathname) });
  }
  handleChange(value) {
    const {
      history: {
        push,
      },
    } = this.props;

    push(routeToTabMap[value]);
    this.setState({ value });
  }
  render() {
    const { value } = this.state;

    if (value === -1) {
      return <Redirect to={routeToTabMap[0]} />;
    }

    return (
      <div>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={(event, newValue) => this.handleChange(newValue)}
            fullWidth
            centered
          >
            <Tab icon={<Person />} label="Profile" />
            <Tab icon={<LocationOn />} label="Location" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          index={value}
          onChangeIndex={this.handleChange}
        >
          <TabContainer><Profile /></TabContainer>
          <TabContainer>Coming soon...</TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

Home.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Home;
