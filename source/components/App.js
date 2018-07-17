import React, { Component } from 'react'

// React-native component imports:
import {
  View, // Core layout-component, basic styling, grouping 'elements'; think '<div>'
  Text, // For displaying text; think '<p>'
  Button, // Think '<button>'; pass it a 'title' and an onPress
  TextInput, // Think '<input type="text">'; onChangeText & keyboardType
  StyleSheet, // Create style-rules that our app will be able to interpret
  Modal // 'Pops' up on screen, 'animationType', 'visible'
} from 'react-native'

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <View style={styles.container}>

          <View style={styles.header}>
            <Text style={styles.title}>Mulch</Text>
            <Text style={styles.subtitle}>A revolutionary calculator app</Text>
          </View>

          <View style={styles.calculator}>

          </View>

        </View>
      </React.Fragment>
    )
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
    marginBottom: 5
  },
  results: {
    fontSize: 25
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalText: {
    fontSize: 35,
    fontWeight: 'bold'
  }

})
