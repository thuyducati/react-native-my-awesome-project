import {
    StyleSheet,
    Platform
} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        marginTop: (Platform.OS === "ios") ? 35 : 0,
        justifyContent: "center",
        alignItems: "center"
    },
    handleButton: {
        width: 200,
        backgroundColor: '#f7c744',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 10,
        margin: 20
    },
    resultText: {
        fontSize: 50,
        fontWeight: "bold"
    },
    buttonTextStyle: {
        color: 'rgb(32, 53, 70)',
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 18
    }
});

export default styles;