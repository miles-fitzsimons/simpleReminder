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
    var a = moment().add(1, 'days').set({hour: 8, minute: 0, second: 0, millisecond: 0})
    console.log('aaa', a)

    this.state = {
      reminderText: '',
    }
  }

  saveReminder() {
    console.log('fhfhdhd')
    // Figure next key
    

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
          format="DD-MM-YYYY HH:mm"
          date={moment().add(1, 'days').set({hour: 8, minute: 0, second: 0, millisecond: 0})}
          minDate={moment().format('DD MM YYYY')}
          mode="datetime"
          showIcon={true}
          onDateChange={(datetime) => {this.setState({datetime: datetime});}}
        />
        <TouchableHighlight
          onPress={this.saveReminder}
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