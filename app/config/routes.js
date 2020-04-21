import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Splash from "../screens/Splash";
import Home from "../screens/Home";
import Timeline from "../screens/Timeline";
import Settings from "../screens/Settings";
import Icon from "react-native-vector-icons/FontAwesome5";

const AppNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: Home,
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
        }
    }
);
const InitialNavigator = createSwitchNavigator({
    Splash: Splash,
    Tab: AppNavigator
});

export default createAppContainer(InitialNavigator);