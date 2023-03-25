import 'react-native-gesture-handler';
import {Text, View, StyleSheet,Button } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font"
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import AppNavigator from './navigation/AppNavigator';




console.log("loaded")
SplashScreen.preventAutoHideAsync();

// const Stack = createStackNavigator();
 



export default function App() {

  const [appIsReady,setAppIsReady] = useState(false);

  useEffect(()=>{

    const prepare = async () =>{

      try{

        await Font.loadAsync({
          "black": require("./assets/fonts//Roboto-Black.ttf"),
          "blackItalic": require("./assets/fonts/Roboto-BlackItalic.ttf"),
          "bold": require("./assets/fonts/Roboto-Bold.ttf"),
          "boldItalic": require("./assets/fonts/Roboto-BoldItalic.ttf"),
          "italic": require("./assets/fonts/Roboto-Italic.ttf"),
          "light": require("./assets/fonts/Roboto-Light.ttf"),
          "lightItalic": require("./assets/fonts/Roboto-LightItalic.ttf"),
          "medium": require("./assets/fonts/Roboto-Medium.ttf"),
          "mediumItalic": require("./assets/fonts/Roboto-MediumItalic.ttf"),
          "regular": require("./assets/fonts/Roboto-Regular.ttf"),
          "thin": require("./assets/fonts/Roboto-Thin.ttf"),
          "thinItalic": require("./assets/fonts/Roboto-ThinItalic.ttf"),
        });
        // await new Promise(resolve => setTimeout(resolve,10000));

      }catch(err){
        console.warn(err)
      
      }finally{
        await SplashScreen.hideAsync();
        setAppIsReady(true)
        console.log("Page is loaded");
      }

    }

    prepare();

  },[])

  const onLayout = useCallback(async ()=>{
    if(appIsReady){
      await SplashScreen.hideAsync();
    }
  },[appIsReady])


  // if the app is not yet ready to prevent blank screen pixel etc..
  if(!appIsReady){
    console.log("wait 10 secs...")
    return null;
  }


  return (
    <SafeAreaProvider onLayout={onLayout}>
      <SafeAreaView>
      </SafeAreaView>
      <AppNavigator/>
    </SafeAreaProvider>

  )
}
