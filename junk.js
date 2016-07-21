import React from "react";
import { StyleSheet, Image } from 'react-native';

export default class BackButton extends React.Component {
  render() {
    return (
      <Image source={require('../images/back_button.png')} style={styles.backButton} />
    );
  }
}

const styles = StyleSheet.create({
  backButton: {
    width: 10,
    height: 17,
    marginLeft: 10,
    marginTop: 3,
    marginRight: 10,
    },
});


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



// // import React from "react";
// // import { StyleSheet } from 'react-native';

// // import Router from '../index';

// // import HomePage from './pages/HomePage';
// // import BackButton from './components/BackButton';
// // import SearchAndCompose from './components/icons/SearchAndCompose';
// // import AddPeople from './components/icons/AddPeople';

// // const firstRoute = {
// //   name: 'Home',
// //   component: HomePage,
// //   leftCorner: AddPeople,
// // };

// // const styles = StyleSheet.create({
// //   header: {
// //     backgroundColor: '#5cafec',
// //   },
// // });

// // const statusBarProps = {
// //   backgroundColor: '#1b6298',
// // };

// // export default class TwitterApp extends React.Component {
// //   render() {
// //     return (
// //       <Router
// //         firstRoute={firstRoute}
// //         headerStyle={styles.header}
// //         backButtonComponent={BackButton}
// //         rightCorner={SearchAndCompose}
// //         statusBarProps={statusBarProps}
// //       />
// //     );
// //   }
// // }
