import React, { Component } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  StyleSheet,
  AsyncStorage
} from 'react-native'
import DatePicker from 'react-native-datepicker'
import moment from 'moment'
import Home from './home'
import NewButton from '../icons/newButton'

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
        console.log(nextKey, item)
        AsyncStorage.setItem(nextKey, item)
          .then(() => {
            this.backHome()
          })

      })
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
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
          showIcon={true}
          onDateChange={(datetime) => {this.setState({datetime: datetime})}}
        />
        <TouchableHighlight
          onPress={this.saveReminder.bind(this)}
          style={styles.saveButton}
        >
          <Text>Save</Text>
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
    backgroundColor: 'red',
    marginTop: 20,
    width: 200,
    height: 100
  },
  textInput: {
    width: 250
  }
})