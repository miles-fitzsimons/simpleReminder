import React, { Component } from 'react'
import {
  View,
  Text,
  ListView,
  TouchableHighlight,
  AsyncStorage,
  StyleSheet
} from 'react-native'
import moment from 'moment'
import EditReminder from './editReminder'
// USED TO SET INITIAL DATA. PERSISTENT
// AsyncStorage.removeItem('1')
// AsyncStorage.removeItem('2')
// AsyncStorage.removeItem('3')
// AsyncStorage.removeItem('4')
// AsyncStorage.removeItem('5')
// const task1 = 'Walk to school'
// const time1 = moment().add(1, 'days')
// const task2 = 'Walk home'
// const time2 = moment().add(2, 'days')
// const task3 = 'Do yoga'
// const time3 = moment().add(3, 'days')
// console.log('time', time1)

// data1 = {task: task1, time: time1}
// data2 = {task: task2, time: time2}
// data3 = {task: task3, time: time3}

// // const data1 = {task: 'Hi Dan!!', time: '19 March 2016'}
// // const data2 = {task: 'Walk cat', time: '17 March 2016'}
// // const data3 = {task: 'Make lunch', time: '18 March 2016'}
// data1 = JSON.stringify(data1)
// data2 = JSON.stringify(data2)
// data3 = JSON.stringify(data3)
// AsyncStorage.setItem('1', data1)
// AsyncStorage.setItem('2', data2)
// AsyncStorage.setItem('3', data3)
// for(var i =1; i < 45; i++ ) {
//   var temp = i.toString()
//   AsyncStorage.removeItem(temp)
// }

// AsyncStorage.removeItem('-Infinity')

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