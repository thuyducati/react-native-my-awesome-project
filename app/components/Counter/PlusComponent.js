import React from "react";
import {
    TouchableOpacity,
    Text
} from "react-native";
import styles from "./styles";

const PlusComponent = (props) => {
    return (
        <TouchableOpacity
            onPress={() => props.onPlusOneUnit(1)}
            style={styles.handleButton}>
            <Text
                style={styles.buttonTextStyle}>
                PLUS 1 (+)
            </Text>
        </TouchableOpacity>
    );
};

export default PlusComponent;