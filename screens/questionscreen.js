import React, { useState} from "react";
import { StyleSheet, Text, View, TouchableOpacity,SafeAreaView } from 'react-native';
import Question from '../components/Question'
import Answer from '../components/Answer';
import { useNavigation } from "@react-navigation/native";
import switcher from "../helperfunctions/switcher";

export default function QuestionScreen(props) { 
  const navigation = useNavigation();
  const { questionNbr } = props.route.params
  let { correctAnswer } = props.route.params 
  let { points } = props.route.params
  const { questions } = props.route.params
  let { endTime } = props.route.params
  const question = questions.pop();
  correctAnswer = switcher(correctAnswer);

  if (questions.length === 9) {
    endTime = new Date();
    endTime.setSeconds(endTime.getSeconds() + 30);
    endTime = endTime.getTime()
  }

  const timeLeft =  Math.round((endTime - (new Date().getTime())) / 1000);


  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
                          onPress= {() => console.log(questions.length)}>
      <Question question = {question.question} answer = {question.answer} timeLeft ={timeLeft}/>
      </TouchableOpacity>
      <View style = {[styles.container, {
        flexDirection: "row", 
      }]}>
        <TouchableOpacity style={{flex: 1}}
                          onPress= {() => {
                              if (correctAnswer === "rätt") {
                                navigation.navigate("correct", { 
                                  questionNbr: questionNbr,
                                  correctAnswer: "rätt", 
                                  points: points + 1, 
                                  questions: questions, 
                                  question: question,
                                  endTime: endTime,
                                })
                              } else {
                                navigation.navigate("incorrect", {
                                  questionNbr: questionNbr,
                                  correctAnswer: "rätt", 
                                  points: points, 
                                  questions: questions, 
                                  question: question,
                                  endTime: endTime,
                                })
                              }
                            }
                          }>
          <Answer color = {['#6EB800', '#467500', '#84DB00']} text = "Rätt" />
        </TouchableOpacity>
        <TouchableOpacity style={{flex: 1}}
                          onPress= {() => {
                            if (correctAnswer === "fel") {
                              navigation.navigate("correct", {
                                questionNbr: questionNbr, 
                                correctAnswer: "fel", 
                                points: points + 1, 
                                questions: questions, 
                                question: question,
                                endTime: endTime,
                              })
                            } else {
                              navigation.navigate("incorrect", {
                                questionNbr: questionNbr,
                                correctAnswer: "rätt", 
                                points: points, 
                                questions: questions, 
                                question: question,
                                endTime: endTime
                              })
                            }
                          }
                        }>
          <Answer color = {['#F51911', '#B8120D', '#360504']} text = "Fel" />
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
