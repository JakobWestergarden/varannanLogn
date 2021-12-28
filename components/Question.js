import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Question = (props) => {
  const questionAndAnswer = props.question + '\n Svar: ' + props.answer
  const { timeLeft } = props
  const [timer, setTimer] = useState(timeLeft)


  return (
    <View>
      
      <LinearGradient 
        // Background Linear Gradient
        colors={['#020024', '#090979', '#00d4ff']}
        style={styles.gradient}
      >
      <View style={styles.counterContainer}>
        <Text style= {styles.counter}>
          {timeLeft}
        </Text>
      </View>
      <View style= {styles.textContainer}>
        <Text 
          style = {styles.text} 
          adjustsFontSizeToFit = {true}
          numberOfLines ={4}
          minimumFontScale={0.1}
        >
          {questionAndAnswer}
        </Text>
      </View>
      </LinearGradient>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  gradient: {
    height: 220,
  },
  counterContainer: {
    height: 70,
  },
  textContainer: {
    height: 150,
  },
  counter: {
    flex: 1,
    textAlign: 'right',
    paddingTop: 20,  
    paddingRight: 40,
    fontSize: 18,
    color: '#FFF'
  },
  text: {
    color: '#FFF',
    paddingHorizontal: 80,

    fontSize: 25,
    textAlign: 'center',
  }
});

export default Question;