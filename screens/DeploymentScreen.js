import React from 'react'
import {
  ActivityIndicator,
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
} from 'react-native'

import { Constants, WebBrowser } from 'expo'

const token = 'Ds2B354PCTMChyYRF7t1eEaW'
const getDeployments = 'https://api.zeit.co/v2/now/deployments'
const headers = {
  Accept: 'application/json',
  Authorization: `Bearer ${token}`,
}

export default class getAllDeployments extends React.Component {
  state = {
    isLoading: true,
    dataSource: null,
    result: null,
  }

  _loadDeploymentsAsync = async () => {
    const res = await fetch(getDeployments, { headers })

    const { deployments } = await res.json()

    const payload = await this.setState({
      isLoading: false,
      dataSource: deployments,
    })
  }

  componentDidMount() {
    this._loadDeploymentsAsync()
  }

  _handlePressOpenWebBrowserAsync = async ({ url }) => {
    let result = await WebBrowser.openBrowserAsync(`https://${url}`)
    this.setState({ result })
  }

  _keyExtractor = item => item.uid

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20, alignItems: 'center' }}>
          <ActivityIndicator />
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item, separators }) => (
            <View>
              <View style={{ backgroundColor: 'mistyrose' }}>
                <View>
                  <Text style={{ fontWeight: 'bold', fontSize: 24 }}>
                    {item.name}{' '}
                  </Text>
                </View>

                <View>
                  <Button
                    title="URL: ${item.url}"
                    onPress={() => this._handlePressOpenWebBrowserAsync(item)}
                  />
                  <Text>
                    {this.state.result && JSON.stringify(this.state.result)}
                  </Text>
                </View>

                <View>
                  <Text>
                    {'\t'}
                    {item.state}{' '}
                  </Text>
                </View>

                <View>
                  <Text>
                    {'\t'}
                    {item.type}{' '}
                  </Text>
                </View>

                <View>
                  <Text>
                    {'Created At: '}
                    {item.created ? new Date(item.created).toString() : null}
                    {'\n'}
                  </Text>
                </View>
              </View>
            </View>
          )}
          keyExtractor={this._keyExtractor}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
})
