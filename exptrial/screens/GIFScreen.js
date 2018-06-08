import React from 'react';
import { Button } from 'react-native-elements';
import { ScrollView, StyleSheet, ImageBackground, Image } from 'react-native';

export default class GIFScreen extends React.Component {
  static navigationOptions = {
    title: 'GIF',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground style={styles.container}>
        
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  buttonStyle: {
    width: '50%',
    height: 45,
    marginLeft: '25%',
    elevation: 1,
    borderRadius: 5,
    marginTop: 30,
    shadowColor: '#FFF',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
  },
});

