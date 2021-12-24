import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Button } from 'react-native-web';

const AnswerCorrect = () => {
  return (
    <View style={styles.gradientContainer}>
      <LinearGradient
        // Background Linear Gradient
        colors={['#6EB800', '#467500', '#84DB00']}
        style={styles.gradient}
      >
        <View style= {styles.textContainer}>
          <Text 
            style = {styles.text}
            adjustsFontSizeToFit = {true}
            numberOfLines ={4}
            minimumFontScale={0.1}
          >
            Rätt
          </Text>
        </View>
      </LinearGradient> 
    </View>
  );
}

const styles = StyleSheet.create({
  gradient: { 
    height: '100%'
  },
  gradientContainer: {
    padding: 10,
    borderRadius: 100,
    overflow: 'hidden'
  },
  textContainer: {
    flex: 1,
    height: 200,
    alignContent: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#FFF',
    paddingHorizontal: 20,

    fontSize: 40,
    textAlign: 'center',
  }
});

export default AnswerCorrect;