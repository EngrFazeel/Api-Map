import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Counter from './Screen/Counter';
import GetValue from './Screen/GetValue';
import Splash from './Screen/Splash';

const Stack = createNativeStackNavigator();

export default class App extends Component {
  
  render() {
    return (
      <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Splash' component={Splash}/>
        <Stack.Screen name='Counter' component={Counter}/>
        <Stack.Screen name='GetValue' component={GetValue}/>
      </Stack.Navigator>
    </NavigationContainer>
    )
  }
}
