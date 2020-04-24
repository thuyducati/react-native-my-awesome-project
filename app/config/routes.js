import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import Icon from "react-native-vector-icons/FontAwesome5";
import Splash from "../components/Splash/Splash";
import Login from "../components/Login/Login";
import Home from "../components/Home/Home";
import Timeline from "../components/Timeline/Timeline";
import Settings from "../components/Settings/Settings";
import TodoComponent from "../components/Todo";
import CounterComponent from "../components/Counter";

const HomeNavigator = createStackNavigator(
    {
        Home: Home,
        Todo: TodoComponent,
        Counter: CounterComponent
    },
    {
        initialRouteName: "Home"
    }
);
const TabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: HomeNavigator,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) =>
                    <Icon name="home" size={25} color={tintColor} />
            }
        },
        Timeline: {
            screen: Timeline,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) =>
                    <Icon name="stream" size={25} color={tintColor} />
            }
        },
        Settings: {
            screen: Settings,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) =>
                    <Icon name="cogs" size={25} color={tintColor} />
            }
        }
    },
    {
        tabBarOptions: {
            activeTintColor: "orange",
            inactiveTintColor: "gray",
            showLabel: true
        },
        order: [
            "Home",
            "Timeline",
            "Settings"
        ]
    }
);
const InitialNavigator = createSwitchNavigator({
    Splash: Splash,
    Login: Login,
    Home: TabNavigator
});

export default createAppContainer(InitialNavigator);