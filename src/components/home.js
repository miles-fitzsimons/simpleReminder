import React, { Component } from 'react'
import {
  View,
  Text,
  ListView,
  TouchableHighlight,
  AsyncStorage,
  StyleSheet
} from 'react-native'

// USED TO SET INITIAL DATA. PERSISTENT
// const data1 = {task: 'Hi Jess!!', time: '19 March 2016'}
// const data2 = {task: 'Walk cat', time: '17 March 2016'}
// const data3 = {task: 'Make lunch', time: '18 March 2016'}
// data1 = JSON.stringify(data1)
// data2 = JSON.stringify(data2)
// data3 = JSON.stringify(data3)
// AsyncStorage.setItem('4', data1)
// AsyncStorage.setItem('2', data2)
// AsyncStorage.setItem('3', data3)

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
          renderRow={(rowData) => <Text style={styles.listItem}>{rowData.task}, {rowData.time}</Text>}
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
    borderWidth: 5
  }
})