import React, { Component } from 'react';

// React-native JS API / Component imports:
import { 
  View, // Core layout-component, basic styling, grouping 'elements'; think '<div>'
  Text, // For displaying text; think '<p>'
  Button, // Think '<button>'; pass it a 'title' and an onPress
  TextInput, // Think '<input type="text">'; pass it an onChangeText
  StyleSheet // Create style-rules that our app will be able to interpret
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      numberOne: '',
      numberTwo: '',
      results: ''
    }
  }

  addNumbers(one, two) {
    this.setState({
      results: one + two
    })
  }

  render() {
    const {numberOne, numberTwo, results} = this.state

    return (
      <View style={styles.container}>
        <Text>A revolutionary calculator app</Text>

        <TextInput placeholder='Number one!' onChangeText={(text) => this.setState({numberOne: text})}/>
        <TextInput placeholder='Number two!' onChangeText={(text) => this.setState({numberTwo: text})}/>

        <Button title='Calculate!' onPress={() => this.addNumbers(numberOne, numberTwo)} />

        <Text>Results: {results}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { // Think of this as a 'class'
    flex: 1,
    backgroundColor: 'aqua',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
