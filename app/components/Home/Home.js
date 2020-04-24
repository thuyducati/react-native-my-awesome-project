import React, { Component } from "react";
import {
    View,
    Text,
    TouchableOpacity
} from "react-native";
import styles from "./styles";

class Home extends Component {
    navigateTo = (component) => {
        this.props.navigation.navigate(component);
    }

    render() {
        return (
            <View
                style={styles.container}>
                <TouchableOpacity
                    onPress={() => this.navigateTo("Todo")}
                    style={styles.buttonStyle}>
                    <Text
                        style={styles.buttonTextStyle}>
                        TO DO LIST
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.navigateTo("Counter")}
                    style={styles.buttonStyle}>
                    <Text
                        style={styles.buttonTextStyle}>
                        COUNTER
                    </Text>
                </TouchableOpacity>
            </View>
        );
    };
};

export default Home;