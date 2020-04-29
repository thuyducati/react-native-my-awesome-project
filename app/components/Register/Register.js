import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableHighlight,
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
} from 'react-native';
import styles from './styles';

class Register extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
            style={styles.container}>
            <View style={styles.container}>
              <StatusBar hidden={true} />
              <Text style={styles.registerTitle}>
                Get started with your free account
              </Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.inputs}
                  placeholder="Enter email"
                  placeholderTextColor="rgba(255, 255, 255, 0.8)"
                  keyboardType="email-address"
                  underlineColorAndroid="transparent"
                  onChangeText={(email) => this.setState({email})}
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.inputs}
                  placeholder="Enter password"
                  placeholderTextColor="rgba(255, 255, 255, 0.8)"
                  secureTextEntry={true}
                  underlineColorAndroid="transparent"
                  onChangeText={(password) => this.setState({password})}
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.inputs}
                  placeholder="Re-enter password"
                  placeholderTextColor="rgba(255, 255, 255, 0.8)"
                  secureTextEntry={true}
                  underlineColorAndroid="transparent"
                  onChangeText={(password) => this.setState({password})}
                />
              </View>
              <TouchableHighlight
                style={[styles.buttonContainer, styles.registerButton]}
                onPress={() => this.props.navigation.goBack(null)}>
                <Text style={styles.registerText}>Register</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={[styles.backButtonContainer, styles.registerButton]}
                onPress={() => this.props.navigation.goBack(null)}>
                <Text style={styles.registerText}>Back</Text>
              </TouchableHighlight>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

export default Register;
