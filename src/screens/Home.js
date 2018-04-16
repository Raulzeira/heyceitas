import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';

export default class Home extends React.Component {

  //static navigationOptions = {
  //  tabBarLabel: null,
  //  tabBarIcon: ({ tintColor }) => (
  //    <Image source={require('../images/home.png')} style={[ styles.icon, { tintColor: tintColor }]} />
  //  )
  //}

  constructor(props) {
    super(props);

    this.state = {
      isFirstAccess: true
    }
  }

  render() {
    if(this.state.isFirstAccess){
      return(
        <View style={styles.container}>
          <Text>Home</Text>
        </View>
      );
    }

    return(
      <View style={styles.container}>
        <Text></Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    width: 24,
    height: 24
  }
});
