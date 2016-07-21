import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native'
import ActionButton from 'react-native-action-button'

class Home extends Component{
  navAddNew(){
    console.log('aaaa')
    this.props.navigator.push({
      id: 'addNew'
    })
  }
  render() {
    console.log('home props', this.props)
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 30, color: 'red'}}>Scenee: {this.props.title}</Text>
          <ActionButton
            buttonColor="#00FF00"
            position="center"
            offsetY={0}
            onPress={this.navAddNew.bind(this)}
          >
          </ActionButton>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  }
});


export default Home