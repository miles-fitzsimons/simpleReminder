import React, { Component } from 'react'
import { Navigator, View, Text } from 'react-native'
import Home from './home'
import AddNew from './addNew'

class Navigation extends Component{
  render() {
    return (
      <Navigator
        initialRoute={{id: 'home'}}
        renderScene={this.navigatorRenderScene}/>
    );
  }

  navigatorRenderScene(route, navigator) {
    _navigator = navigator;
    switch (route.id) {
      case 'home':
        return (<Home navigator={navigator} title="hhhhme"/>);
      case 'addNew':
        return (<AddNew navigator={navigator} title="aaadddnnneewww" />);
    }
  }
}

export default Navigation

