import React, { Component, PropTypes } from 'react'
import {
  TouchableHighlight,
  Image,
  Text,
  StyleSheet
} from 'react-native'
import AddNew from '../components/addNew'

const propTypes = {
  toRoute: PropTypes.func.isRequired
}

class NewReminder extends Component {
  constructor(props) {
    super(props)

    this.styles = StyleSheet.create({
      icon: {
        width: 25,
        height: 25,
        marginTop: 5,
        marginLeft: 8
      }
    })
  }

  goToAddNew() {
    console.log('aaa', this.props.toRoute)
    this.props.toRoute({
      name: 'Add a new reminder',
      component: AddNew
    })
  }

  render() {
    console.log('new reminder props::', this.styles.icon)
    return (
      <TouchableHighlight onPress={this.goToAddNew.bind(this)}>
        <Image
          source={require('../images/createNew.png')}
          style={this.styles.icon}
        />
      </TouchableHighlight>
    )
  }
}

export default NewReminder

// import React, { Component } from "react";
// import { StyleSheet, Image } from 'react-native';

// class NewReminder extends Component {
//   render() {
//     return (
//       <Image source={require('../images/plus.png')} style={styles.backButton} />
//     );
//   }
// }

// const styles = StyleSheet.create({
//   backButton: {
//     width: 20,
//     height: 17,
//     marginLeft: 10,
//     marginTop: 3,
//     marginRight: 10
//     },
// });

// export default NewReminder