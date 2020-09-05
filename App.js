// import React from 'react';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import podiumGenerator from './utils/podiumGenerator';

export default function App() {
  const podiumOne = <Image source={require('./assets/podium1.png')} />;
  const podiumTwo = <Image source={require('./assets/podium2.png')} />;
  const podiumThree = <Image source={require('./assets/podium3.png')} />;
  const podiumFour = <Image source={require('./assets/podium4.png')} />;
  const podiumFive = <Image source={require('./assets/podium5.png')} />;

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#f7b500', '#e36b07']}
        style={styles.gradient}
      >
      <View style={{flex: 3}}>
      </View>
      <ScrollView style={styles.medalContainer}>
        <View style={{flexDirection: 'row'}}>
        {podiumGenerator(podiumOne)}
        {podiumGenerator(podiumTwo)}
        {podiumGenerator(podiumThree)}
        {podiumGenerator(podiumFour)}
        {podiumGenerator(podiumFive)}
        </View>
      </ScrollView>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  gradient: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  },
  medalContainer: {
    flexDirection: 'row',
    overflow: 'scroll',
    paddingHorizontal: 10
  }
});