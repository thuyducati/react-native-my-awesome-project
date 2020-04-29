import React, { Component } from "react";
import {
    TouchableOpacity,
    Text
} from "react-native";
import styles from "./styles";

class PlusComponent extends Component {
    render() {
        return (
            <TouchableOpacity
                onPress={() => this.props.onPlusOneUnit(1)}
                style={styles.handleButton}>
                <Text
                    style={styles.buttonTextStyle}>
                    PLUS 1 (+)
                </Text>
            </TouchableOpacity>
        );
    };
};

export default PlusComponent;