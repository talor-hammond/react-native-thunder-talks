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
      result: '',
      submitted: false
    }
  }

  addNumbers(one, two) {
    const numberOne = Number(one)
    const numberTwo = Number(two)

    this.setState({
      results: numberOne + numberTwo,
      submitted: true
    })
  }

  render() {
    // Pulling what we need from state:
    const { numberOne, numberTwo, results, submitted } = this.state

    return (
      <React.Fragment>
        <View style={styles.container}>

          <View style={styles.header}>
            <Text style={styles.title}>Calculator</Text>
            <Text style={styles.subtitle}>A revolutionary calculator app</Text>
          </View>

          <View style={styles.calculator}>
            <Text>Number one: </Text>
            <TextInput style={styles.inputs} onChangeText={(text) => this.setState({ numberOne: text })} />
            
            <Text>Number two: </Text>
            <TextInput style={styles.inputs} onChangeText={(text) => this.setState({ numberTwo: text })} />

            <Button title='Calculate!' onPress={() => this.addNumbers(numberOne, numberTwo)} />

            {submitted && <Text style={styles.results}>Results: {results}</Text>}
          </View>

        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({

  container: { // Think of this as a 'class'
    flex: 1,
    backgroundColor: '#f3f3f3', // These are our style properties...
    alignItems: 'center',
  },
  header: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30
  },
  subtitle: {
    fontSize: 20
  },
  calculator: {
    flex: 3
  },
  inputs: {
    backgroundColor: 'white',
    borderRadius: 7,
    borderWidth: 1,
    borderColor: 'black'
  },
  results: {
    fontSize: 25
  }

});
