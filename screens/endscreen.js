import React, { useState} from "react";
import { StyleSheet, Text, View, TouchableOpacity,SafeAreaView } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Mode from '../components/Mode';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';


export default function EndScreen(props) {
  const navigation = useNavigation();
  const { points } = props.route.params
  const possiblePoints = 10
  const message = "Du fick " + points +"/"+possiblePoints + " poäng!"
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => 
                                      navigation.navigate('landing')}>
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
        </LinearGradient>
      </TouchableOpacity>
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
});