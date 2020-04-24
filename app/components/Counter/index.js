import React from "react";
import { View } from "react-native";
import PlusContainer from "../../containers/Counter/PlusContainer";
import ResultContainer from "../../containers/Counter/ResultContainer";
import MinusContainer from "../../containers/Counter/MinusContainer";
import styles from "./styles";

const CounterComponent = () => {
    return (
        <View
            style={styles.container}>
            <PlusContainer />
            <ResultContainer />
            <MinusContainer />
        </View>
    );
};

export default CounterComponent;