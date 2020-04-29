import React, { Component } from "react";
import {
    View,
    Text,
    TouchableOpacity
} from "react-native";
import styles from "./styles";
import Button from "react-native-button";

class Home extends Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params = {} } = navigation.state;
        return {
            headerTitle: (params.myUsername != "") ? params.myUsername : "Welcome new user",
            headerTitleStyle: {
                color: 'gray'
            },
            headerRight: (
                <Button
                    onPress={() => params.navigateToSettings()}
                    containerStyle={{ marginRight: 10 }}
                    style={{ fontSize: 15 }}>
                    Settings
                </Button>
            )
        };
    };

    _navigateToSettings() {
        this.props.navigation.navigate("Settings");
    }

    componentDidMount() {
        this.props.navigation.setParams({
            navigateToSettings: this._navigateToSettings.bind(this),
            myUsername: this.props.navigation.state.params.otherParam,
            // myUsername: this.props.navigation.getParam("otherParam", ""),
        });
    }

    navigateTo = (component) => {
        this.props.navigation.navigate(component);
    }

    render() {
        return (
            <View
                style={styles.container}>
                <TouchableOpacity
                    onPress={() => this.navigateTo("Todo")}
                    style={styles.buttonStyle}>
                    <Text
                        style={styles.buttonTextStyle}>
                        TO DO LIST
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.navigateTo("Counter")}
                    style={styles.buttonStyle}>
                    <Text
                        style={styles.buttonTextStyle}>
                        COUNTER
                    </Text>
                </TouchableOpacity>
            </View>
        );
    };
};

export default Home;