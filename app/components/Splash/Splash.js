import React, { Component } from "react";
import {
    View,
    Text,
    StatusBar
} from "react-native";
import styles from "./styles";

class Splash extends Component {
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
            this.props.navigation.navigate("Login");
        }
    }
    render() {
        return (
            <View
                style={styles.viewStyles}>
                <StatusBar
                    hidden={true} />
                <Text
                    style={styles.textStyles}>
                    Welcome to {"\n"} GMO-Z.com RUNSYSTEM
                </Text>
            </View>
        );
    };
};

export default Splash;