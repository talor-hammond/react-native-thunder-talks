import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Calculator from './source/components/Calculator'

export default class App extends React.Component {
  addNumbers(one, two) {
    console.log('Pressed the button')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>A revolutionary calculator app</Text>

        <Calculator addNumbers={() => this.addNumbers()}/>
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
