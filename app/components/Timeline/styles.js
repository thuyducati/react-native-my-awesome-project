import {
    StyleSheet,
    Platform
} from "react-native";

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

export default styles;