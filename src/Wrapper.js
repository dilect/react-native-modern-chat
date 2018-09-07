import React, { Component } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';

class Wrapper extends Component {
  render() {
    return <KeyboardAwareScrollView scrollEnabled={false}>
      
    </KeyboardAwareScrollView>
  }
};

export default Wrapper;