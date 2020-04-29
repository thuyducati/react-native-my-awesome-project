import React, { Component } from "react";
import {
    SafeAreaView,
    StatusBar,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    View,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    Keyboard
} from "react-native";
import styles from "./styles";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ""
        };
    }

    render() {
        return (
            <SafeAreaView
                style={styles.container}>
                <StatusBar
                    hidden={true} />
                <KeyboardAvoidingView
                    behavior="padding"
                    style={styles.container}>
                    <TouchableWithoutFeedback
                        onPress={Keyboard.dismiss}
                        style={styles.container}>
                        <View
                            style={styles.logoContainer}>
                            <View
                                style={styles.logoContainer}>
                                <Image
                                    source={require("../../images/runsystem_logo.png")}
                                    style={styles.logoImage} />
                                <Text
                                    style={styles.logoTitle}>
                                    Account Information
                                </Text>
                            </View>
                            <View
                                style={styles.loginFormContainer}>
                                <TextInput
                                    placeholder="Enter username or email"
                                    placeholderTextColor="rgba(255, 255, 255, 0.8)"
                                    keyboardType="email-address"
                                    returnKeyType="next"
                                    autoCorrect={false}
                                    ref={"usernameField"}
                                    onChangeText={(changedText) => this.setState({ username: changedText })}
                                    onSubmitEditing={() => this.refs.passwordField.focus()}
                                    style={styles.loginField} />
                                <TextInput
                                    placeholder="Enter password"
                                    placeholderTextColor="rgba(255, 255, 255, 0.8)"
                                    keyboardType="visible-password"
                                    returnKeyType="go"
                                    secureTextEntry={true}
                                    autoCorrect={false}
                                    ref={"passwordField"}
                                    style={styles.loginField} />
                                <TouchableOpacity
                                    onPress={
                                        () => {
                                            this.props.navigation.navigate("Home", {
                                                otherParam: this.state.username
                                            })
                                        }
                                    }
                                    style={styles.loginButton}>
                                    <Text
                                        style={styles.loginText}>
                                        SIGN IN
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    };
};

export default Login;