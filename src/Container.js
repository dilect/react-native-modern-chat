import React, { Component } from 'react';
import { StyleSheet, FlatList, ImageBackground, View, Text } from 'react-native';

const source = [];
for (let I = 0; I < 500; I++) {
  source.push(I)
};

class Container extends Component {
  render() {
    return <ImageBackground style={styles.container} source={require('./bg.png')}>
      <FlatList 
        contentContainerStyle={styles.content}
        data={source}
        inverted={true}
        keyExtractor={this._keyExtractor}
        renderItem={({ item }) => (
          <View>
            <Text>{item}</Text>
          </View>
        )}
      />
    </ImageBackground>
  }
  _keyExtractor = (item, index) => {
    return index.toString();
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 5
  }
});

export default Container;