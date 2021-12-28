import React, { useState} from "react";
import { StyleSheet, Text, View, TouchableOpacity,SafeAreaView } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Mode from '../components/Mode';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import questionRandomizer from "../helperfunctions/questionRandomizer";


export default function LandingPage() {
  const navigation = useNavigation();
  const message = "Hej! \n Vilket gamemode vill ni spela?"
  const questions = questionRandomizer();
  let endTime;

  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['#020024', '#090979', '#00d4ff']}
        style={styles.gradient}
      >
      <View style= {styles.textContainer}>
        <Text 
          style = {styles.text}
        > {message}
        </Text>
      </View>
      <TouchableOpacity style = {styles.modecontainerNormal}
                        onPress= {() => 
                          navigation.navigate('questions', {
                            questionNbr: 1,
                            correctAnswer: "fel", 
                            points: 0, 
                            questions: questions,
                            endTime: endTime
                          })}>

        <Mode text='Normal mode'></Mode>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.modecontainerDrinking}
                        onPress= {() =>
                          navigation.navigate('questions')}>
        <Mode text='Drinking mode'></Mode>
      </TouchableOpacity>

      </LinearGradient>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
  },
  gradient: {
    height: '100%',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  text: {
    color: '#FFF',
    paddingVertical: 10,
    paddingHorizontal: 10,
    textAlign: 'center',

    fontSize: 30,
  },
  modecontainerNormal: {
    flex: 1,  
    paddingBottom: 20,
    paddingTop: 50,
    justifyContent: 'center'
  },
  modecontainerDrinking: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 150,

    justifyContent: 'center'
  }
});