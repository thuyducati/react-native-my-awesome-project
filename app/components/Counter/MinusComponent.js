import React, { Component } from "react";
import {
    TouchableOpacity,
    Text
} from "react-native";
import styles from "./styles";

class MinusComponent extends Component {
    render() {
        return (
            <TouchableOpacity
                onPress={() => this.props.onMinusOneUnit(1)}
                style={styles.handleButton}>
                <Text
                    style={styles.buttonTextStyle}>
                    MINUS 1 (-)
                </Text>
            </TouchableOpacity>
        );
    };
};

export default MinusComponent;