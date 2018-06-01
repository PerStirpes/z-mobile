import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

import Loader from '../components/Loader';
export default class SplashScreen extends React.Component {
  state = {
    appReady: false,
    rootKey: Math.random(),
  };

  constructor() {
    super();

    this._image = require('../assets/images/white-bg.png');
  }

  componentDidMount() {
    this.resetAnimation();
  }

  resetAnimation() {
    this.setState({
      appReady: false,
      rootKey: Math.random(),
    });

    setTimeout(() => {
      this.setState({
        appReady: true,
      });
    }, 2000);
  }

  render() {
    return (
      <View key={this.state.rootKey} style={styles.root}>
        <Loader
          isLoaded={this.state.appReady}
          imageSource={this._image}
          backgroundStyle={styles.loadingBackgroundStyle}
        >
          <View style={styles.container}>
            <TextInput>empty space</TextInput>
            <Button
              onPress={() => this.props.navigation.navigate('Home')}
              title="Login"
            />
          </View>
        </Loader>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  loadingBackgroundStyle: {
    backgroundColor: 'black',
  },
});
