import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import L1Bai1 from '../components/lab1/L1Bai1';
const NavigationLabs = () => {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator 
        screenOptions={{headerShown: false}}>
            <Stack.Screen name='L1Bai1' component={L1Bai1}/>
        </Stack.Navigator>
    </NavigationContainer>
   
  )
}

export default NavigationLabs