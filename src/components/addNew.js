import React, { Component } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  StyleSheet,
  Picker
} from 'react-native'
import DatePicker from 'react-native-datepicker'
import moment from 'moment'


class AddNew extends Component {
  constructor(props) {
    super(props)
    // Set default reminder day/time to tomorrow at 6:00pm
    let today = new Date()
    console.log('date', today)

    // let day = dateNow.getDate()
    // today.setDate(today.getDate() + 1)
    console.log('day', today)

    this.state = {
      reminderText: '',
      datetime: today
    }
  }

  render() {
    // Figure out new key id here?
    console.log('add new props', this.state)
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
          date={this.state.datetime}
          format="DD-MM-YYYY HH:mm"
          minDate={moment().format('DD MM YYYY')}
          mode="datetime"
          showIcon={true}
          onDateChange={(datetime) => {this.setState({datetime: datetime});}}
        />
        <TouchableHighlight
          onPress={() => {console.log('hi')}}
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
    backgroundColor: 'red'
  },
  textInput: {
    width: 250
  }
})