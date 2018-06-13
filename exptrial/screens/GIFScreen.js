import React from 'react';
import { Button } from 'react-native-elements';
import { ScrollView, StyleSheet, ImageBackground, Image, TextInput } from 'react-native';

export default class GIFScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = { text: '', gifURL: 'https://cdn.tutsplus.com/webdesign/uploads/legacy/tuts/377_loading_gif/final.gif' };
    this.getRandom();
  }

  handlePress (searchParams) {
    searchParams ? this.getSearch(searchParams) : this.getRandom();
  }

  getRandom() {
    let that = this;

    async function fetchGIF () {
       let response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=y5Rxknv2Yloe0AFYK7lnrPfwNKbxc2Nz&tag=&rating=R`);
       let gifData = await response.json();
       that.setState({ gifURL: gifData.data.image_original_url });
    }

    fetchGIF();
  }

  getSearch(searchParams) {
    let that = this;
    async function fetchGIF () {
       let response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=y5Rxknv2Yloe0AFYK7lnrPfwNKbxc2Nz&q=${searchParams}&limit=50&offset=0&rating=R&lang=en`);
       let gifData = await response.json();
       console.log(gifData);
       that.setState({ gifURL: gifData.data[0].images.original.url });
    }

    fetchGIF();
  }

  static navigationOptions = {
    title: 'GIF',
  };

  render() {
    const { navigate } = this.props.navigation;
    const gifURL = this.state.gifURL
    return (
      <ImageBackground style={styles.container}>
        <Image
            style={styles.imageStyles}
            source={{uri: gifURL}}
          />
        <TextInput
          style={styles.inputStyles}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          defaultValue='Search'
        />
        <Button
          onPress={() => this.handlePress(this.state.text)}
          buttonStyle={[ styles.buttonStyle, { backgroundColor: "#0099cc" } ]}
          title="SEARCH"
          color="white"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={() => this.handlePress()}
          buttonStyle={[ styles.buttonStyle, { backgroundColor: "#FF1493" } ]}
          title="RANDOM"
          color="white"
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
  imageStyles: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
  },
  inputStyles: {
    backgroundColor: 'white',
    height: 40,
    width: 200,
    marginLeft: 90,
    marginTop: 15,
  }
});
