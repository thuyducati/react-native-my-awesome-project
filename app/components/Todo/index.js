import React from "react";
import { View, Platform } from "react-native";
import AddContainer from "../../containers/Todo/AddContainer";
import TasksContainer from "../../containers/Todo/TasksContainer";
import styles from "./styles";

const TodoComponent = () => {
    return (
        <View
            style={styles.container}>
            <AddContainer />
            <TasksContainer />
        </View>
    );
};

export default TodoComponent;