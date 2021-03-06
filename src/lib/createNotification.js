import React from 'react'
import { DeviceEventEmitter } from 'react-native'
import Notification from 'react-native-system-notification'
import moment from 'moment'

function createNotification (task, time, id) {
	var notifyDateTime = moment(time, "DD-MM-YYYY hh:mm A")
	var year = notifyDateTime.year()
	var month = notifyDateTime.month()
	var date = notifyDateTime.date()
	var hour = notifyDateTime.hour()
	var minute = notifyDateTime.minute()
	Notification.create({
		id: parseInt(id),
		subject: 'Don\'t forget to...',
		message: task,
		sendAt: new Date(year, month, date, hour, minute, 0),
		payload: {id: parseInt(id)}
	})
}

export default createNotification