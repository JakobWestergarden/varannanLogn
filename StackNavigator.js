import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import QuestionScreen from './screens/questionscreen'
import IncorrectScreen from './screens/incorrectscreen'
import CorrectScreen from './screens/correctscreen'
import LandingPage from './screens/landingpage'
import EndScreen from './screens/endscreen'

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Group>
        <Stack.Screen name = "landing" component={LandingPage} />
        <Stack.Screen name = "questions" component={QuestionScreen} />
        <Stack.Screen name = "incorrect" component={IncorrectScreen} />
        <Stack.Screen name = "correct" component={CorrectScreen} />
        <Stack.Screen name = "end" component={EndScreen} />
      </Stack.Group>
    </Stack.Navigator>
  )
}

export default StackNavigator;