import React, { Component } from "react";
import { Text } from "react-native";
import styles from "./styles";

class ResultComponent extends Component {
    render() {
        return (
            <Text
                style={styles.resultText}>
                {this.props.unit}
            </Text>
        );
    };
};

export default ResultComponent;