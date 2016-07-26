import React, { Component } from 'react'
import {
	View,
	Text,
	TextInput,
	StyleSheet,
	TouchableHighlight,
	AsyncStorage
} from 'react-native'
import DatePicker from 'react-native-datepicker'
import moment from 'moment'
import Home from './home'
import NewButton from '../icons/newButton'
import deleteReminder from '../lib/deleteReminder'

console.log(deleteReminder)

class EditReminder extends Component {
	constructor(props) {
		super(props)
		this.state = {
			reminderText: this.props.task,
			datetime: this.props.time
		}
	}

	backHome() {
		this.props.toRoute({
			name: 'Simple Reminder',
			component: Home,
			rightCorner: NewButton
		})
	}

	updateReminder() {
		var item={task: this.state.reminderText, time: this.state.datetime}
		item = JSON.stringify(item)
		AsyncStorage
			.setItem(this.props.itemKey, item)
			.then(() => {
				this.backHome()
			})
	}

	render() {
		return (
			<View style={styles.container}>
				<TouchableHighlight
					style={styles.button}
					onPress={() => {deleteReminder(this.props.itemKey); this.backHome()}}
				>
					<Text>Delete</Text>
				</TouchableHighlight>
				<Text>THIS IS THE EDIT PAGE!!</Text>
				<TextInput
					style={styles.textInput}
					defaultValue={this.props.task}
					onChangeText={(text) => {this.setState({reminderText: text})}}
				/>
				<DatePicker
					style={{width: 200}}
					format="DD-MM-YYYY hh:mm A"
					date={this.state.datetime}
					minDate={moment()}
					mode="datetime"
					showIcon={true}
					onDateChange={(datetime) => {console.log(datetime);this.setState({datetime: datetime})}}
				/>
				<TouchableHighlight
					onPress={this.updateReminder.bind(this)}
					style={styles.button}
				>
					<Text>Update</Text>
				</TouchableHighlight>
			</View>
		)
	}
}

export default EditReminder

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  button: {
    backgroundColor: 'red',
    marginTop: 20,
    width: 200,
    height: 100
  },
  textInput: {
    width: 250
  }
})