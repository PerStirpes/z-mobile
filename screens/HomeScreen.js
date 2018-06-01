import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'Home',
    headerTitleStyle: {
      color: '#444',
      fontWeight: 'normal',
    },
  };
  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Play Song"
          onPress={() => this.props.navigation.navigate('SplashScreen')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'white',
  },
});
