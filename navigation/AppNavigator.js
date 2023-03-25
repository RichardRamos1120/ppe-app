import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';

import MainNavigator from './MainNavigator';



export default function AppNavigator(props) {
  return (
    <NavigationContainer>
        <MainNavigator/>
    </NavigationContainer>

  )
}
