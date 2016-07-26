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

class NewButton extends Component {
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
    this.props.toRoute({
      name: 'Add a new reminder',
      component: AddNew
    })
  }

  render() {
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

export default NewButton