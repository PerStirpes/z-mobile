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
          title="Remix"
          onPress={() => this.props.navigation.navigate('Splash')}
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
