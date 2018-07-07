import React from 'react';

// React-native JS API / Component imports:
import { 
  View, // Core layout-component, basic styling, grouping 'elements'; think '<div>'
  Text, // For displaying text; think '<p>'
  Button, // Think '<button>'; pass it a 'title' and an onPress!
  TextInput, // Think '<input type="text">'; pass it an onChange?????
  StyleSheet // Create style-rules that our app will be able to interpret
} from 'react-native';

// Components

export default class App extends React.Component {
  addNumbers(one, two) {
    console.log('Pressed the button')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>A revolutionary calculator app</Text>

        <Button title='Calculate!' onPress={() => this.addNumbers()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { // Think of this as a 'class'
    flex: 1,
    backgroundColor: '#f3f3f3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
