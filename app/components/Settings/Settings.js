import React, { Component } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    FlatList
} from "react-native";
import { connect } from "react-redux";
import styles from "./styles";

const mapStateToProps = (state) => {
    return {
        tasks: (!state.taskReducers ? [] : state.taskReducers)
    };
};
const mapDispatchToProps = (dispatch) => {
    return {};
};

class DataTemplate extends Component {
    render() {
        return (
            <View
                style={styles.rowTemplate}>
                <Text
                    style={[
                        styles.taskNameText,
                        {
                            color: (this.props.completed == true) ? "green" : "red",
                            fontWeight: "bold"
                        }
                    ]}>
                    {(this.props.taskId).toString().concat(" - ")}
                    {this.props.taskName.concat(" ----- ")}
                    {this.props.completed == true ? "Completed" : "In Progress"}
                </Text>
            </View>
        );
    };
};

class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }

    showToDoListHandler = () => {
        console.log(`My all tasks = ${JSON.stringify(this.props.tasks)}`);
        this.setState({
            items: this.props.tasks
        });
    }

    render() {
        return (
            <View
                style={styles.container}>
                <TouchableOpacity
                    onPress={this.showToDoListHandler}
                    style={styles.buttonStyle}>
                    <Text
                        style={styles.buttonTextStyle}>
                        SHOW TO DO LIST
                    </Text>
                </TouchableOpacity>
                <View
                    style={styles.todoContainer}>
                    <FlatList
                        ref={"taskList"}
                        data={this.state.items}
                        renderItem={({ item, index }) =>
                            <DataTemplate
                                {...item}
                                parentFlatList={this}
                            />
                        }
                        keyExtractor={(item, index) => item.taskName}
                    />
                </View>
            </View>
        );
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);