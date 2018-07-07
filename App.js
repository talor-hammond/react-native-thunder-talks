import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Calculator from './source/components/Calculator'

export default class App extends React.Component {
  add(numOne, numTwo) {
    console.log('Pressed the button')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>A revolutionary calculator app</Text>
        
        <Calculator add={() => this.add()}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
