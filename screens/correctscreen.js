import React, { useEffect, useState} from "react";
import { StyleSheet, Text, View, TouchableOpacity,SafeAreaView } from 'react-native';
import Question from '../components/Question'
import Answer from '../components/Answer';
import { useNavigation } from "@react-navigation/native";
import screenChoser from "../helperfunctions/calculategameend";
import calculateGameEnd from "../helperfunctions/calculategameend";

export default function IncorrectScreen(props) { 
  //let answer;
  const { correctAnswer } = props.route.params
  const { questionNbr } = props.route.params
  const { points } = props.route.params
  const { questions } = props.route.params
  const { timeLeft } = props.route.params

  const question = questions[questionNbr]
  const message = "JA! \n \n du svarade " + correctAnswer + " och du skulle svara " + correctAnswer;
  const navigation = useNavigation();
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
                          onPress= {() => console.log(points)}>
      <Question question = {question.question} answer = {question.answer} timeLeft = {timer}>
      </Question>
      </TouchableOpacity>
      <View style = {[styles.container, {
        flexDirection: "row", 
      }]}>
        <TouchableOpacity style={{flex: 1}}
                          onPress= {() => {
                                      const nextPage = calculateGameEnd(questionNbr, timer);
                                      timeToNextCycle = 1000 - (new Date() - lastTick.getTime());
                                      navigation.navigate(nextPage, {
                                        questionNbr: questionNbr + 1,
                                        correctAnswer: correctAnswer,
                                        points: points,
                                        questions: questions,
                                        timeLeft: timer,
                                      }
                                    )}}>
          <Answer color = {['#6EB800','#467500', '#84DB00']} text = {message}/>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    flex: 1,
    padding: 100
  },
  text: {
    fontSize: 200 ,
  }
});
