import React, { Component } from 'react'
import {
  StyleSheet,
  AppRegistry
} from 'react-native'
import Router from 'react-native-simple-router'
import Home from './src/components/home'
import NewReminder from './src/icons/newReminder'
import BackButton from './src/icons/backButton'


const firstRoute = {
  name: 'Home',
  component: Home,
  rightCorner: NewReminder
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#5cafec',
  },
})

// const statusBarProps = {
//   backgroundColor: '#1b6298',
// };

class simpleReminder extends Component {
  render() {
    return (
      <Router
        firstRoute={firstRoute}
        headerStyle={styles.header}
        backButtonComponent={BackButton}
      />
    )
  }
}

AppRegistry.registerComponent('simpleReminder', () => simpleReminder);

// BACK BUTTON COMPONENT IN ROUTER??
        // backButtonComponent={BackButton}
        // rightCorner={SearchAndCompose}
        // statusBarProps={statusBarProps}



// import React, { Component, PropTypes } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View,
//   TouchableHighlight,
//   ToastAndroid,
//   Navigator,
//   ToolbarAndroid
// } from 'react-native';
// import Router from 'react-native-simple-router'
// import Home from './src/components/home'
// import NewReminder from './src/icons/newReminder'

// // const propTypes = {
// //   // toRoute: PropTypes.func.isRequired
// // }

// class HelloPage extends Component {
//   // constructor(props) {
//   //   super(props)
//   //   this.nextPage = this.nextPage.bind(this)
//   // }
//   nextPage() {
//     console.log(this.props)
//     this.props.toRoute({
//       name: 'A new ffff',
//       component: Home
//     })
//   }
//   render() {
//     return (
//       <View>
//         <TouchableHighlight
//           onPress={this.nextPage.bind(this)}
//           underlayColor="red"
//           rightCorner
//         >
//          <Text>Next page please</Text>
//         </TouchableHighlight>
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   header: {
//     backgroundColor: '#5cafec',
//   },
// });

// const firstRoute = {
//   name: 'Simple Reminder',
//   component: Home,
//   rightCorner: NewReminder
// };



// class simpleReminder extends Component {
//   render() {
//     return (
//       <Router
//         firstRoute={firstRoute}
//         headerStyle={styles.header}
//       />
//     )
//   } 
// }



// AppRegistry.registerComponent('simpleReminder', () => simpleReminder);


//         // <ActionButton
//         //   position="center"
//         //   buttonColor="#00FF00"
//         //   onPress={()=>{console.log('fff')}}
//         // >
//         // </ActionButton>

//   // constructor(props) {
//   //   super(props)
//   //   this.state = {
//   //     routes: {
//   //       home: {
//   //         title: 'Home',
//   //         component: Home,
//   //         index: 0
//   //       },
//   //       addNew: {
//   //         title: 'Add New',
//   //         component: AddNew,
//   //         index: 1
//   //       }
//   //     }
//   //   }
//   // }
//   // componentDidMount() {
    
//   // }
//   // render() {
//   //   console.log('ffff', this.props)
//   //   return (
//   //     <View>
//   //       <ToolbarAndroid
//   //         title="Simple Reminder"
//   //         actions={[{title: this.state.routes.addNew.title, icon: require('./src/plus.png'), show: 'always'}]}
//   //         style={{height: 60}}
//   //         onActionSelected={this.onActionSelected}
//   //       />
//   //       <Navigator ref="navi"
//   //         initialRoute={this.state.routes.home}
//   //         renderScene={(route, navigator) => {
//   //           console.log('route', route)
//   //           console.log('navigator', navigator)
//   //           if(route.component) {
//   //             //return React.createElement(route.component, {navigator})
//   //           }
//   //         }}
//   //       />
//   //     </View>
//   //   )
//   // }
//   // onActionSelected(position){
//   //   console.log('position', position)
//   //   console.log(this.refs)
//   //   //this.refs.navi.push(this.state.routes.addNew)
//   // } 
