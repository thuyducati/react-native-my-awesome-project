import React, { Component } from "react";
import {
    View,
    Text,
    FlatList,
    RefreshControl
} from "react-native";
import { fetchDataFromServer } from "../../config/server";
import styles from "./styles";

class DataTemplate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            getName: "",
            getEmail: ""
        };
    }

    componentDidMount() {
        this.setState({
            getName: this.props.item.name,
            getEmail: this.props.item.email
        });
    }

    render() {
        return (
            <View
                style={styles.templateContainer}>
                <View
                    style={styles.itemContainer}>
                    <Text
                        style={styles.dataStyle}>
                        {this.state.getName}
                    </Text>
                    <Text
                        style={styles.dataStyle}>
                        {this.state.getEmail}
                    </Text>
                    <View
                        style={styles.separatorStyle} />
                </View>
            </View>
        );
    };
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
                    renderItem={({ item, index }) => <DataTemplate item={item} index={index} parentFlatList={this} />}
                    keyExtractor={(item, index) => index.toString()}
                    refreshControl={<RefreshControl refreshing={this.state.isRefreshing} onRefresh={this.refreshItems} />}
                />
            </View>
        );
    };
};

export default Timeline;