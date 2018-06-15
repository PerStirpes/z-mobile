// TODO: remove extra svg
import React from 'react'
import { StyleSheet, View, Button } from 'react-native'
import {
  External,
  CloseWindow,
  Clear,
  Caret,
  Plus,
  PermalinkIcon,
  Logo,
  GitHub,
  Arrow,
  FileIcon,
  Triangle,
  Logo2,
  Filter,
  Done,
  Deploy,
  MinimizeWindow,
  Search,
  Cog,
  Question,
  Dashed,
} from '../assets/icons/index'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'Home',
    headerTitleStyle: {
      color: '#444',
      fontWeight: 'normal',
    },
  }
  render() {
    return (
      <View style={styles.container}>
        <Plus />
        <Triangle />
        <Clear />
        <Logo2 />
        <View style={styles.box}>
          <GitHub light={false} height={20} width={20} />
          <Caret />
          <Cog />
          <External />
          <Done />
          <Deploy />
          <Search />
          <Arrow />
        </View>

        <View />
        <Button
          title="Remix"
          onPress={() => this.props.navigation.navigate('Splash')}
        />
        <Button
          title="Deployments"
          onPress={() => this.props.navigation.navigate('Deployment')}
        />
        {/* 
         
          <PermalinkIcon />
        <Dashed />
        <MinimizeWindow />
        <Question />
        <FileIcon />
        <Filter />
        <Logo />    
         <CloseWindow />
       */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'white',
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
})
