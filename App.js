import React from 'react';
import { StyleSheet, View } from 'react-native';
import PlaceInput from './src/components/place-input/index';
import PlaceList from './src/components/place-list/index';

export default class App extends React.Component {
  state = {
    places: [],
  };

  handlePlaceAdded = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat(placeName),
      };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceInput onPlaceAdded={this.handlePlaceAdded} />
        <PlaceList places={this.state.places} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
