import React from 'react';
import { Button } from 'react-native-elements';
import { ScrollView, StyleSheet, ImageBackground } from 'react-native';


export default class TopicsScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground style={styles.container}>
          <Button
            onPress={() => navigate('GIF')}
            buttonStyle={[ styles.buttonStyle, { backgroundColor: "#ff5a5a" } ]}
            title="FOOD"
            color="white"
            accessibilityLabel="Learn more about this purple button"
          />
          <Button
            onPress={() => navigate('GIF')}
            buttonStyle={[ styles.buttonStyle, { backgroundColor: "#ffb543" } ]}
            title="SPORTS"
            color="gray"
            accessibilityLabel="Learn more about this purple button"
          />
          <Button
            onPress={() => navigate('GIF')}
            buttonStyle={[ styles.buttonStyle, { backgroundColor: "#e4ff55" } ]}
            title="MEMES"
            color="gray"
            accessibilityLabel="Learn more about this purple button"
          />
          <Button
            onPress={() => navigate('GIF')}
            buttonStyle={[ styles.buttonStyle, { backgroundColor: "#93ff68" } ]}
            title="NATURE"
            color="gray"
            accessibilityLabel="Learn more about this purple button"
          />
          <Button
            onPress={() => navigate('GIF')}
            buttonStyle={[ styles.buttonStyle, { backgroundColor: "#0099cc" } ]}
            title="GAMING"
            color="white"
            accessibilityLabel="Learn more about this purple button"
          />
          <Button
            onPress={() => navigate('GIF')}
            buttonStyle={[ styles.buttonStyle, { backgroundColor: "#c660ff" } ]}
            title="CELEBRITIES"
            color="white"
            accessibilityLabel="Learn more about this purple button"
          />
          <Button
            onPress={() => navigate('GIF')}
            buttonStyle={[ styles.buttonStyle, { backgroundColor: "#FF1493" } ]}
            title="SEXY"
            color="white"
            accessibilityLabel="Learn more about this purple button"
          />
          <Button
            onPress={() => navigate('GIF')}
            buttonStyle={[ styles.buttonStyle, { backgroundColor: "white" } ]}
            title="RANDOM"
            color="black"
            accessibilityLabel="Learn more about this purple button"
          />
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
