import React, { Component } from 'react';
import { 
  StyleSheet, 
  SafeAreaView,
  KeyboardAvoidingView
} from 'react-native';
import Toolbar from './Toolbar';
import Container from './Container';

class Wrapper extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
          <Container />
          <Toolbar />
        </KeyboardAvoidingView>
      </SafeAreaView>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Wrapper;