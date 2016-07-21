import React, { Component } from 'react'
import { StyleSheet, Image } from 'react-native'

class BackButton extends Component {
	render() {
		return (
			<Image
				source={require('../images/deleteBack.png')}
				style={{
					width: 20,
					height: 17,
					marginLeft: 10,
					marginTop: 3,
					marginRight: 10
				}}
			/>
		)
	}
}

export default BackButton