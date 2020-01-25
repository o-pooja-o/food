import { createAppContainer } from 'react-navigation';
import { createStackNavigator,createSwitchNavigator, createDrawerNavigator } from 'react-navigation-stack';
//import React from 'react';
//import { StyleSheet, Text, View } from 'react-native';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from "./src/screens/ResultsShowScreen";

const navigator = createStackNavigator(
    {
      Search : SearchScreen,
        ResultsShow:ResultsShowScreen
    },
    {
      initialRouteName: 'Search',
      defaultNavigationOptions:{
        title: 'Business Search'
      }
    }
);

export default createAppContainer(navigator);