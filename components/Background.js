import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Background = () => {
  return (
    <View>
      <LinearGradient
        // Background Linear Gradient
        colors={['#020024', '#090979', '#00d4ff']}
        style={styles.gradient}
      >
      <View style= {styles.textContainer}>
        <Text 
          style = {styles.text}
          adjustsFontSizeToFit = {true}
          numberOfLines ={4}
          minimumFontScale={0.1}
        >
        </Text>
      </View>
      </LinearGradient>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  gradient: {
    height: '100%',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
  },
  text: {
    color: '#82C4A3',
    paddingHorizontal: 1000,

    fontSize: 40,
    textAlign: 'center',
  }
});

export default Background