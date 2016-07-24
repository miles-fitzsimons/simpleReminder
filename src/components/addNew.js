import React, { Component } from 'react'
import {
  View,
  Text,
  TextInput
} from 'react-native'

class AddNew extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reminderText: ''
    }
  }

  blur(text) {
    console.log('text')
  }

  render() {
    // Figure out new key id here?
    console.log('add new props', this.blur)
    return (
      <View>
        <Text>What</Text>
        <TextInput
          id="what"
          placeholder="Remind me to..."
          onBlur={this.blur}
        />
        <Text>When</Text>
      </View>
    )
  }
}

export default AddNew