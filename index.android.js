import React, { Component } from 'react'
import {
  StyleSheet,
  AppRegistry
} from 'react-native'
import Router from 'react-native-simple-router'
import NewButton from './src/icons/newButton'
import BackButton from './src/icons/backButton'


const firstRoute = {
  name: 'Simple Reminder',
  component: Home,
  rightCorner: NewButton
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#5cafec'
  },
})

class simpleReminder extends Component {
  render() {
    return (
      <Router
        firstRoute={firstRoute}
        headerStyle={styles.header}
        backButtonComponent={BackButton}
      />
    )
  }
}

AppRegistry.registerComponent('simpleReminder', () => simpleReminder);