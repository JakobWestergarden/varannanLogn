import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import QuestionScreen from './screens/questionscreen'

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name = "Questions" component={QuestionScreen} />
    </Stack.Navigator>
  )
}

export default StackNavigator;