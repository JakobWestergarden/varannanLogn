import React, { useEffect, useState} from "react";
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
  const { timeLeft } = props.route.params

  const answer = (correctAnswer === "rätt") ? "fel" : "rätt"; 
  const question = questions[questionNbr]
  const navigation = useNavigation();
  const nextPage = calculateGameEnd(questionNbr, timeLeft);
  const message = "NEJ! \n \n du svarade " + answer + " men skulle ha svarat " + correctAnswer;
  let [timer, setTimer] = useState(timeLeft);
  let lastTick = new Date();

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timer-1)}, 1000);
    return () => {
      clearInterval(interval);
    }
  })


  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
                          onPress= {() => console.log(points)}>
      <Question question = {question.question} answer = {question.answer} timeLeft = {timer}/>
      </TouchableOpacity>
      <View style = {[styles.container, {
        flexDirection: "row", 
      }]}>
        <TouchableOpacity style={{flex: 1}}
                          onPress= {() => {
                            timeToNextCycle = 1000 - (new Date() - lastTick.getTime());
                            navigation.navigate(nextPage, {
                              questionNbr: questionNbr + 1,
                              correctAnswer: correctAnswer,
                              points: points,
                              questions: questions,
                              timeLeft: timer,
                            })}}>
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
