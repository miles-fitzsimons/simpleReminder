import React, { Component } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  StyleSheet,
  AsyncStorage,
  DeviceEventEmitter
} from 'react-native'
import DatePicker from 'react-native-datepicker'
import moment from 'moment'
import Home from './home'
import NewButton from '../icons/newButton'
import Notification from 'react-native-system-notification'
import createNotification from '../lib/createNotification'

class AddNew extends Component {
  constructor(props) {
    super(props)
    // Set default reminder day/time to tomorrow at 6:00pm
    var datetime = moment().add(1, 'days').set({hour: 8, minute: 0, second: 0, millisecond: 0}).format("DD-MM-YYYY hh:mm A")
    this.state = {
      reminderText: '',
      datetime: datetime
    }
  }

  backHome() {
    this.props.toRoute({
      name: 'Simple Reminder',
      component: Home,
      rightCorner: NewButton
    })
  }

  saveReminder() {
    // Figure next key
    AsyncStorage
      .getAllKeys()
      .then((keys) => {
        var nextKey = keys.length ? 
        Math.max(...keys) + 1 : 1
        nextKey = nextKey.toString()
        var item = {task: this.state.reminderText, time: this.state.datetime}
        item = JSON.stringify(item)
        AsyncStorage.setItem(nextKey, item)
          .then(() => {
            createNotification(this.state.reminderText, this.state.datetime, nextKey)
            this.backHome()
          })

      })
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{styles.textInput}}
          placeholder="Remind me to..."
          onChangeText={(text) => {this.setState({reminderText: text})}}
        />
        <Text>at</Text>
        <DatePicker
          style={{width: 200}}
          format="DD-MM-YYYY hh:mm A"
          date={this.state.datetime}
          minDate={moment()}
          mode="datetime"
          showIcon={false}
          onDateChange={(datetime) => {this.setState({datetime: datetime})}}
        />
        <TouchableHighlight
          onPress={this.saveReminder.bind(this)}
          style={styles.saveButton}
          underlayColor={'#5cafec'}
        >
          <Text style={{fontSize: 20, color: '#FFFFFF'}}>Save</Text>
        </TouchableHighlight>

      </View>
    )
  }
}

export default AddNew

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  saveButton: {
    backgroundColor: '#5cafec',
    marginTop: 20,
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  textInput: {
    width: 250
  }
})