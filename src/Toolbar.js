import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Input from './Input';


class Toolbar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Input />
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    paddingBottom: 6,
    borderTopWidth: 1,
    borderTopColor: '#DDDDDD',
    backgroundColor: '#EEEEEE'
  }
});

export default Toolbar;