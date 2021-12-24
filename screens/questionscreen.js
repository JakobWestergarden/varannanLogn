import React, { useState} from "react";
import { StyleSheet, Text, View, TouchableOpacity,SafeAreaView } from 'react-native';
import Question from './../components/Question'
import AnswerCorrect from './../components/AnswerCorrect';
import AnswerWrong from './../components/AnswerWrong'

export default function QuestionScreen() { 
  let answer;
  let answerShouldBe = "correct"


  return (
    <View style={styles.container}>
      <TouchableOpacity
                          onPress= {() => console.log(answer)}>
      <Question question = 'Vad heter jag?' answer = 'Jakob'/>
      </TouchableOpacity>
      <View style = {[styles.container, {
        flexDirection: "row", 
      }]}>
        <TouchableOpacity style={{flex: 1}}
                          onPress= {() => answer = "correct" === answerShouldBe}>
          <AnswerCorrect />
        </TouchableOpacity>
        <TouchableOpacity style={{flex: 1}}
                          onPress= {() => answer = "correct" === answerShouldBe}>
          <AnswerWrong />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
