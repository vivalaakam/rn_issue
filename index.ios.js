/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { AppRegistry, Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'

const { width, height } = Dimensions.get('window')

const contentOffset = { x: width, y: 0 }
console.log(contentOffset)
export default class scroll_test extends Component {
  render() {
    return (
      <ScrollView
        horizontal
        pagingEnabled
        contentOffset={contentOffset}
      >
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to screen #1
          </Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to screen #2
          </Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to screen #3
          </Text>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width,
    height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})

AppRegistry.registerComponent('scroll_test', () => scroll_test)
