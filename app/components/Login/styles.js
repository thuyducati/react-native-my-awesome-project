import { StyleSheet, Dimensions } from "react-native";

var MAX_WIDTH = Dimensions.get("screen").width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "rgb(32, 53, 70)"
    },
    logoContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    logoImage: {
        width: MAX_WIDTH - 70,
        height: 50
    },
    logoTitle: {
        textAlign: "center",
        fontSize: 18,
        color: "#f7c744",
        opacity: 0.9,
        marginTop: 5,
        marginBottom: 50
    },
    loginFormContainer: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        padding: 20,
        height: 200
    },
    loginField: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        color: '#ffffff',
        height: 40,
        paddingHorizontal: 10,
        borderRadius: 5,
        marginBottom: 10
    },
    loginButton: {
        backgroundColor: '#f7c744',
        paddingVertical: 15,
        marginTop: 5,
        borderRadius: 5
    },
    loginText: {
        color: 'rgb(32, 53, 70)',
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 18
    }
});

export default styles;