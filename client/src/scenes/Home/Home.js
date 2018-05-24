import React, { Component } from 'react';
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
    const { value } = this.state;

    return (
      <div>
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
          index={value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer><Profile /></TabContainer>
          <TabContainer>Coming soon...</TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

export default Home;
