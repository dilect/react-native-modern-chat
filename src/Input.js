import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput';

class Input extends Component {
  render() {
    return (
      <AutoGrowingTextInput 
        style={styles.input}
        placeholder='Message...'
        maxHeight={240}
      />
    ) 
  }
};

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    backgroundColor: '#FFFFFF',
    fontSize: 16
  }
});

export default Input;