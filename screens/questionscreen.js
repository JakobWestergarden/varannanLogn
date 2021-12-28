import React, { useEffect, useState} from "react";
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
  const { timeLeft } = props.route.params

  const question = questions[questionNbr];
  correctAnswer = switcher(correctAnswer);
  const [timer, setTimer] = useState(timeLeft);
  let lastTick = new Date();

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer >= 0) {
        setTimer(timer-1)
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    }
  })



  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
                          onPress= {() => console.log(questions.length)}>
      <Question question = {question.question} answer = {question.answer} timeLeft ={timer}/>
      </TouchableOpacity>
      <View style = {[styles.container, {
        flexDirection: "row", 
      }]}>
        <TouchableOpacity style={{flex: 1}}
                          onPress= {() => {
                              timeToNextCycle = 1000 - (new Date() - lastTick.getTime());
                              console.log({timer})
                              if (correctAnswer === "rätt") {
                                navigation.navigate("correct", { 
                                  questionNbr: questionNbr,
                                  correctAnswer: "rätt", 
                                  points: points + 1, 
                                  questions: questions, 
                                  timeLeft: timer,
                                  timeToNextCycle: timeToNextCycle,
                                })
                              } else {
                                navigation.navigate("incorrect", {
                                  questionNbr: questionNbr,
                                  correctAnswer: "rätt", 
                                  points: points, 
                                  questions: questions, 
                                  timeLeft: timer,
                                })
                              }
                            }
                          }>
          <Answer color = {['#6EB800', '#467500', '#84DB00']} text = "Rätt" />
        </TouchableOpacity>
        <TouchableOpacity style={{flex: 1}}
                          onPress= {() => {
                            timeToNextCycle = 1000 - (new Date() - lastTick.getTime());
                            if (correctAnswer === "fel") {
                              navigation.navigate("correct", {
                                questionNbr: questionNbr, 
                                correctAnswer: "fel", 
                                points: points + 1, 
                                questions: questions, 
                                question: question,
                                timeLeft: timer,
                                timeToNextCycle: timeToNextCycle,
                              })
                            } else {
                              navigation.navigate("incorrect", {
                                questionNbr: questionNbr,
                                correctAnswer: "rätt", 
                                points: points, 
                                questions: questions, 
                                question: question,
                                timeLeft: timer,
                                timeToNextCycle: timeToNextCycle,
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
