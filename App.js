/**
 * Sample React Native App - Splash Screen
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';

class Splash extends Component {
  render() {
    const viewStyles = [
      styles.container,
      {
        backgroundColor: "orange"
      }
    ];
    const textStyles = {
      color: "#FFFFFF",
      fontSize: 25,
      fontWeight: "bold",
      textAlign: "center"
    };
    return (
      <View style={viewStyles}>
        <StatusBar hidden={true} />
        <Text style={textStyles}>
          Welcome to {"\n"} GMO-Z.com RUNSYSTEM
        </Text>
      </View>
    );
  };
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }
  performTimeConsumingTask = () => {
    return new Promise((resolve) => {
      setTimeout(
        () => resolve("result"),
        2000
      )
    });
  }
  async componentDidMount() {
    // Pre-load data from an external API.
    // Pre-load data using AsyncStorage.
    const data = await this.performTimeConsumingTask();
    if (data != null) {
      this.setState({
        isLoading: false
      });
    }
  }
  render() {
    if (this.state.isLoading) {
      return <Splash />;
    }
    return (
      <View style={styles.container} >
        <Text>
          Welcome to React Native!!! ^_^
        </Text>
        <Text>
          Reload the App to see a Splash Screen...
        </Text>
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});