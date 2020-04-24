import React from "react";
import {
    TouchableOpacity,
    Text
} from "react-native";
import styles from "./styles";

const MinusComponent = (props) => {
    return (
        <TouchableOpacity
            onPress={() => props.onMinusOneUnit(1)}
            style={styles.handleButton}>
            <Text
                style={styles.buttonTextStyle}>
                MINUS 1 (-)
            </Text>
        </TouchableOpacity>
    );
};

export default MinusComponent;