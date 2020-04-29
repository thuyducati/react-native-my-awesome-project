import React, { Component } from "react";
import { View } from "react-native";
import AddContainer from "../../containers/Todo/AddContainer";
import TasksContainer from "../../containers/Todo/TasksContainer";
import styles from "./styles";

class TodoComponent extends Component {
    render() {
        return (
            <View
                style={styles.container}>
                <AddContainer />
                <TasksContainer />
            </View>
        );
    }
};

export default TodoComponent;