import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createSwitchNavigator } from 'react-navigation'

import Loader from './components/Loader'
import SplashScreen from './screens/SplashScreen'
import HomeScreen from './screens/HomeScreen'
import DeploymentScreen from './screens/DeploymentScreen'
class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    )
  }
}

export default (Switch = createSwitchNavigator(
  {
    Splash: SplashScreen,
    Home: HomeScreen,
    Deployment: DeploymentScreen,
  },
  {
    initialRouteName: 'Splash',
  },
))

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
