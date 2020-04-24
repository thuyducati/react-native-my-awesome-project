import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Platform,
    FlatList,
    RefreshControl
} from "react-native";
import { fetchDataFromServer } from "../config/server";

const DataTemplate = (props) => {
    return (
        <View
            style={styles.templateContainer}>
            <View
                style={styles.itemContainer}>
                <Text
                    style={styles.dataStyle}>
                    {props.item.name}
                </Text>
                <Text
                    style={styles.dataStyle}>
                    {props.item.email}
                </Text>
                <View
                    style={styles.separatorStyle} />
            </View>
        </View>
    );
};

class Timeline extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRefreshing: false,
            data: []
        };
    }

    componentDidMount() {
        this.getAllUsers();
    }

    refreshItems = () => {
        this.getAllUsers();
    }

    getAllUsers = () => {
        this.setState({
            isRefreshing: true
        });
        fetchDataFromServer().then((users) => {
            this.setState({
                data: users,
                isRefreshing: false
            });
        }).catch(() => {
            this.setState({
                data: [],
                isRefreshing: false
            });
        });
    }

    render() {
        return (
            <View
                style={styles.container}>
                <FlatList
                    ref={"usersList"}
                    data={this.state.data}
                    renderItem={({ item, index }) => <DataTemplate item={item} index={index} parentFlatlist={this} />}
                    keyExtractor={(item, index) => index.toString()}
                    refreshControl={<RefreshControl refreshing={this.state.isRefreshing} onRefresh={this.refreshItems} />}
                />
            </View>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: (Platform === "ios") ? 35 : 0
    },
    templateContainer: {
        flex: 1,
        flexDirection: "row",
        margin: 10
    },
    itemContainer: {
        flex: 1,
        flexDirection: "column"
    },
    dataStyle: {
        color: "black",
        fontSize: 15
    },
    separatorStyle: {
        backgroundColor: "lightgray",
        height: 1
    }
});

export default Timeline;