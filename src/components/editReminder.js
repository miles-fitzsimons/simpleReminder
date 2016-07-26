import React, { Component } from 'react'
import {
	View,
	Text,
	TextInput,
	StyleSheet,
	TouchableHighlight,
	AsyncStorage,
	Image
} from 'react-native'
import DatePicker from 'react-native-datepicker'
import moment from 'moment'
import Home from './home'
import NewButton from '../icons/newButton'
import deleteReminder from '../lib/deleteReminder'

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
					underlayColor={'#5cafec'}
					onPress={() => {deleteReminder(this.props.itemKey); this.backHome()}}
				>
					<Image
						source={require('../images/deleteBin.png')}
						style={styles.deleteBin}
					/>
				</TouchableHighlight>
				<Text style={{fontSize: 20}}>Or edit this reminder below</Text>
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
					showIcon={false}
					onDateChange={(datetime) => {this.setState({datetime: datetime})}}
				/>
				<TouchableHighlight
					onPress={this.updateReminder.bind(this)}
					style={styles.button}
					underlayColor={'#5cafec'}
				>
					<Text style={{fontSize: 20, color: '#FFFFFF'}}>Save</Text>
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
  },
  deleteBin: {
  	resizeMode: 'contain',
  	height: 50,
  	marginTop: 20,
  	marginBottom: 20
  }
})