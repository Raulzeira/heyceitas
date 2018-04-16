import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';

export default class Pantry extends React.Component {

  //static navigationOptions = {
  //  tabBarLabel: null,
  //  tabBarIcon: ({tintColor}) => (
  //    <Image source={require('../images/pantry.png')} style={styles.icon}/>
  //  )
  //}

  render() {
    return(
      <View style={styles.container}>
        <Text>Pantry</Text>
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
