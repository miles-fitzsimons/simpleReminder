import { AsyncStorage } from 'react-native'

function deleteReminder (key) {
	console.log('deletinggggg', key)
	AsyncStorage
		.removeItem(key)
}

export default deleteReminder