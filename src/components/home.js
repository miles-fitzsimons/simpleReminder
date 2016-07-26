import React, { Component } from 'react'
import {
  View,
  Text,
  ListView,
  TouchableHighlight,
  AsyncStorage,
  StyleSheet,
  DeviceEventEmitter
} from 'react-native'
import moment from 'moment'
import EditReminder from './editReminder'
import Notification from 'react-native-system-notification'

Notification.create({
  subject: 'Testing testing',
  message: '123',
  action: 'TEST',
  bigText: 'BIGGGGIE'
})

// Notification.addListener('press', (e) => {
//   console.log(e)
// })

class Home extends Component{
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    const tasksArr = []
    AsyncStorage
      .getAllKeys()
      .then((keys) => {
        keys.forEach((key) => {
          AsyncStorage
            .getItem(key)
            .then((item) => {
              item = JSON.parse(item)
              item.itemKey = key
              tasksArr.push(item)
              const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
              this.setState({
                dataSource: ds.cloneWithRows(tasksArr),
                isLoading: false
              })
            })
        })
      })
  }

  goToEditPage(itemData) {
    this.props.toRoute({
      name: 'Edit',
      component: EditReminder,
      passProps: itemData
    })
  }

  render() {

    return (
      this.state.isLoading ?
      <View>
        <Text>Loading...</Text>
      </View>
      :
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => 
            <View>
              <TouchableHighlight
              onPress={this.goToEditPage.bind(this, rowData)}
              >
            <Text style={styles.listItem}>{rowData.task}, {rowData.time}</Text>
              </TouchableHighlight>
            </View>}
        />
      </View>
    )
  }
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  listItem: {
    // WHY DON'T YOU WORK?!?!?!?!
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 5,
    color: 'red',
    fontSize: 20
  }
})