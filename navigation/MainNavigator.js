import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//icons
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

//styles

// screens
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Scan from "../screens/Scan";


const Tab = createBottomTabNavigator();



export default function MainNavigator() {
    return (
        <Tab.Navigator screenOptions={{headerShown: false,}}>
          <Tab.Screen  name="Home" component={Home} options={{
            tabBarLabel:"Home",
            
            tabBarIcon: ({color,size}) => <Entypo name="home" size={size} color={color} />
          }}/>
          <Tab.Screen  name="Scan" component={Scan} options={{
            tabBarLabel:"Scan PPE",
            tabBarIcon: ({color,size}) => <AntDesign name="scan1" size={size} color={color} />
          }}/>
          <Tab.Screen  name="Profile" component={Profile} options={{
            tabBarLabel:"Profile",
            tabBarIcon: ({color,size}) => <Ionicons name="person" size={size} color={color} />
          }}/>
        </Tab.Navigator>
      )
}

const styles = StyleSheet.create({})