import React, { Component } from 'react'
import { View, Text } from 'react-native'

class AddNew extends Component {
  render() {
    return (
      <View>
        <Text style={{color: 'red'}}>Add a new reminder on this page</Text>
        <Text>Add a new reminder on this page</Text>
        <Text>Add a new reminder on this page</Text>
        <Text>Add a new reminder on this page</Text>
        <Text>Add a new reminder on this page</Text>
      </View>
    )
  }
}

export default AddNew

// import React, {PropTypes} from "react";
// import { StyleSheet, TouchableHighlight, Image } from 'react-native';

// import FindPeoplePage from '../../pages/FindPeoplePage';

// const propTypes = {
//   toRoute: PropTypes.func.isRequired,
// };

// class AddPeopleIcon extends React.Component {
//   constructor(props) {
//     super(props);

//     this.styles = StyleSheet.create({
//       icon: {
//         width: 25,
//         height: 18,
//         marginTop: 5,
//         marginLeft: 8,
//       },
//     });

//     this.goToAddPage = this.goToAddPage.bind(this);
//   }

//   goToAddPage() {
//     this.props.toRoute({
//       name: 'Find people',
//       component: FindPeoplePage,
//     });
//   }

//   render() {
//     return (
//       <TouchableHighlight underlayColor="transparent" onPress={this.goToAddPage}>
//         <Image source={require('../../images/add_people_icon.png')} style={this.styles.icon} />
//       </TouchableHighlight>
//     );
//   }
// }

// AddPeopleIcon.propTypes = propTypes;

// export default AddPeopleIcon;




// // import React, { Component } from 'react'
// // import { Navigator, View, Text, ToolbarAndroid } from 'react-native'


// // class AddNew extends Component{
// //   render() {
// //     console.log('add new props', this.props)
// //     return (
// //       <View>
// //         <Text>Scene: {this.props.title}</Text>
// //       </View>
// //     );
// //   }
// // };

// // export default AddNew