import { StyleSheet, Text, View } from "react-native";


export default function Local(props) {
    return (
        <View style={styles.localView}>
            <Text style={styles.localStyle}>{props.texto}</Text>
        </View>
  );
}

const styles = StyleSheet.create({
    localView: {
        paddingTop: 16,
        alignItems: "left",
    },
    localStyle: {
        fontSize: 20,
        margin: 10
    },
});
