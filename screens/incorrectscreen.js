import React, { useState} from "react";
import { StyleSheet, Text, View, TouchableOpacity,SafeAreaView } from 'react-native';
import Question from '../components/Question'
import Answer from '../components/Answer';
import { useNavigation } from "@react-navigation/native";
import calculateGameEnd from "../helperfunctions/calculategameend";

export default function IncorrectScreen(props) { 
  //let answer;
  const { correctAnswer } = props.route.params
  const { questionNbr } = props.route.params
  const { points } = props.route.params
  const { questions } = props.route.params
  const { question } = props.route.params
  const { endTime } = props.route.params


  const timeLeft = Math.round((endTime - new Date()) / 1000);

  let answer = (correctAnswer === "rätt") ? "fel" : "rätt"; 
  const navigation = useNavigation();

  const nextPage = calculateGameEnd(questionNbr, endTime);

  const message = "NEJ! \n \n du svarade " + answer + " men skulle ha svarat " + correctAnswer;


  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
                          onPress= {() => console.log(points)}>
      <Question question = {question.question} answer = {question.answer} timeLeft = {timeLeft}/>
      </TouchableOpacity>
      <View style = {[styles.container, {
        flexDirection: "row", 
      }]}>
        <TouchableOpacity style={{flex: 1}}
                          onPress= {() => 
                            navigation.navigate(nextPage, {
                              questionNbr: questionNbr + 1,
                              correctAnswer: correctAnswer,
                              points: points,
                              questions: questions,
                              endTime: endTime,
                            })}>
          <Answer color = {['#F51911', '#B8120D', '#360504']} text = {message}/>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
