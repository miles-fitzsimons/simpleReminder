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
import deleteReminder from '../lib/deleteReminder'
import NewButton from '../icons/newButton'

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
    Notification.addListener('press', (e) => {
      let id = e.payload.id
      id = id.toString()
      deleteReminder(id)
      // this.props.toRoute({
      //   name: 'Simple Reminder',
      //   component: Home,
      //   rightCorner: NewButton
      // })
    })

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
              style={styles.listItem}
              underlayColor={'#5cafec'}
            >
              <View>
                <Text style={styles.taskFont}>{rowData.task}</Text>
                <Text style={styles.timeFont}>{rowData.time}</Text>
              </View>
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
    borderColor: '#5cafec',
    borderStyle: 'solid',
    borderWidth: 2,
    marginTop: 15,
    width: 275,
    minHeight: 75,
    borderRadius: 5,
    backgroundColor: '#5cafec',
    flex: 1,
    justifyContent: 'center'
  },
  taskFont: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 5
  },
  timeFont: {
    color: '#FFFFFF',
    fontSize: 17,
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 5

  }
})