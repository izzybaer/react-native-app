import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default class PlaceInput extends Component {
  state = {
    placeName: '',
  };

  handleInput = val => {
    this.setState({ placeName: val });
  };

  handleInputSubmit = () => {
    if (this.state.placeName.trim() === '') {
      return;
    }
    this.props.onPlaceAdded(this.state.placeName);
  };
  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.placeInput}
          placeholder="your favorite place"
          value={this.state.placeName}
          onChangeText={this.handleInput}
        />
        <Button
          title="add"
          style={styles.placeButton}
          onPress={this.handleInputSubmit}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  placeInput: {
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
    width: '70%',
  },
  placeButton: {
    width: '30%',
  },
});
