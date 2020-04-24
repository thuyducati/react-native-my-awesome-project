import React from "react";
import { Text } from "react-native";
import styles from "./styles";

const ResultComponent = (props) => {
    return (
        <Text
            style={styles.resultText}>
            {props.unit}
        </Text>
    );
};

export default ResultComponent;