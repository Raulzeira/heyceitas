/**
 * Sample React Native App - TabNavigator
 * https://github.com/facebook/react-native
 * @flow
 * Raul
 */
 import React from 'react';
 import { Image } from 'react-native';
 import { TabNavigator } from 'react-navigation';

 //Screens
 import HomeScreen from './src/screens/Home';
 import PantryScreen from './src/screens/Pantry';
 import RecipeScreen from './src/screens/Recipe';
 import SettingScreen from './src/screens/Setting';

export default TabNavigator ({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('./src/images/home.png')}
          style={{
          width: 24,
          height: 24,
          tintColor: tintColor
        }}/>
      )
    }
  },
  Pantry: {
    screen: PantryScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('./src/images/pantry.png')}
          style={{
          width: 24,
          height: 24,
          tintColor: tintColor
        }}/>
      )
    }
  },
  Recipe: {
    screen: RecipeScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('./src/images/recipe.png')}
          style={{
          width: 24,
          height: 24,
          tintColor: tintColor
        }} />
      )
    }
  },
  Setting: {
    screen: SettingScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('./src/images/setting.png')} 
          style={{
          width: 24,
          height: 24,
          tintColor: tintColor
        }}/>
      )
    }
  }
},{
  tabBarPosition: 'bottom',
  swipeEnable: true,
  tabBarOptions: {
    showIcon: true,
    showLabel: false,
    style: {
      backgroundColor: '#952115'
    }
  }
});
