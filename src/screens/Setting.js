import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';

export default class Setting extends React.Component {

  //static navigationOptions = {
  //  tabBarLabel: null,
  //  tabBarIcon: ({ tintColor }) => (
  //    <Image source={require('../images/setting.png')} style={[ styles.icon, {tintColor: tintColor}]}/>
  //  )
  //}

  render() {

    return(
      <View style={styles.container}>
        <Text>Setting</Text>
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
