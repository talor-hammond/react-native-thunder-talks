import React, { Component } from 'react';

// React-native JS API / Component imports:
import {
  View, // Core layout-component, basic styling, grouping 'elements'; think '<div>'
  Text, // For displaying text; think '<p>'
  Button, // Think '<button>'; pass it a 'title' and an onPress
  TextInput, // Think '<input type="text">'; pass it an onChangeText
  StyleSheet, // Create style-rules that our app will be able to interpret
  Modal // 'Pops' up on screen, 'animationType', 'transparent', 'visible'
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
    // Pulling from state...
    const { numberOne, numberTwo, results, submitted } = this.state
    // Pulling from styles... can you do this? TODO
    const { inputs, container, header } = styles

    return (
      <React.Fragment>

        <Modal animationType="slide" visible={submitted}>
            <View style={inputs}>
              <Text>{ numberOne } + { numberTwo } is { results }, wow</Text>
            </View>
        </Modal>

        <View style={container}>

          <View style={header}>
            <Text style={title}>Calculator</Text>
            <Text style={subtitle}>A revolutionary calculator app</Text>
          </View>

          <View style={calculator}>
            <Text>Number one: </Text>
            <TextInput style={inputs} onChangeText={(text) => this.setState({ numberOne: text })} />

            <Text>Number two: </Text>
            <TextInput style={inputs} onChangeText={(text) => this.setState({ numberTwo: text })} />

            <Button title='Calculate!' onPress={() => this.addNumbers(numberOne, numberTwo)} />

            {/* {submitted && <Text style={results}>Results: {results}</Text>} */}
          </View>

        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({

  container: { // Think of this as a 'class'; className="container"
    flex: 1, // These are our style properties; all have equivalent values
    backgroundColor: '#f3f3f3',
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
  },
  modal: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalText: {
    fontSize: 35,
    fontWeight: 'bold' 
  }

});
