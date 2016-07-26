import { AsyncStorage } from 'react-native'

function deleteReminder (key) {
	console.log('deletinggggg', key)
	AsyncStorage
		.removeItem(key)
		.then(() => {
			
		})
}

export default deleteReminder


	// deleteReminder() {
	// 	AsyncStorage
	// 		.removeItem(this.props.itemKey)
	// 		.then (() => {
	// 			this.backHome()
	// 		})
	// }
