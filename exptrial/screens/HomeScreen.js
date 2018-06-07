import React from 'react';
import {
  ImageBackground,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Button } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
//let's switch to a random funny meme/gif generator
//figure out how to have these buttons link to differen components
//pretty much all inline styling 
//GIF Key: y5Rxknv2Yloe0AFYK7lnrPfwNKbxc2Nz 
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigate } = this.props.navigation;
    console.log(navigate);
    return (
      <ImageBackground style={styles.container}
        source={require('../assets/images/Landing.jpg')}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.getStartedContainer}>
            {this._maybeRenderDevelopmentModeWarning()}
          </View>
          <Text style={[ styles.titleStyle, styles.neonBlue ]}>
              #
            <Text style={[ styles.titleStyle, styles.neonPink ]}>
                GIF
            </Text>
          
              ster
          </Text>
          <Text style={[ styles.captionStyle ] }>
            GIFs, Go Nuts
          </Text>
          <Button
            onPress={() => navigate('Topics')}
            buttonStyle={[ styles.buttonStyle, { backgroundColor: "#0099cc" } ]}
            title="TOPICS"
            color="white"
            accessibilityLabel="Learn more about this purple button"
          />
          <Button
            onPress={() => navigate('Settings')}
            buttonStyle={[ styles.buttonStyle, { backgroundColor: "#FF1493" } ]}
            title="RANDOM"
            color="white"
            accessibilityLabel="Learn more about this purple button"
          />
        </ScrollView>

      
      </ImageBackground>
    );
  }

  // <Text style={styles.tabBarInfoText}>This is a tab bar. You can edit it in:</Text>
  // 
  // <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}
//so our styles are just defined here..
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  neonPink: {
    color: '#FF1493',
  },
  neonBlue: {
    color: '#0099cc',
  },
  neonGreen: {
    color: '#93ff68',
  },
  neonYellow: {
    color: '#e4ff55',
  },
  neonOrange: {
    color: '#ffb543',
  },
  neonRed: {
    color: '#ff5a5a'
  },
  neonPurple: {
    color: '#c660ff'
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
  titleStyle: {
    fontFamily: "blackjack",
    fontSize: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 5,
  },
  captionStyle: {
    fontFamily: "roboto",
    fontSize: 20,
    color: 'rgba(256, 256, 256, 1)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    textAlign: 'center',
    marginBottom: 250,
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
