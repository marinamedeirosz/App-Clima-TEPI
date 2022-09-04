import { StyleSheet, Text, View, Image } from "react-native";


export default function Detalhes(props) {
    return (
        <View style={styles.localView}>
            <Image style={styles.detalhesImg} source={require("../../assets/vento.png")} />
            <Text style={styles.detalhesStyle}>{props.texto}</Text>
        </View>
  );
}

const styles = StyleSheet.create({
    detalhesView: {
        paddingTop: 16,
        alignItems: "left",
    },
    detalhesImg: {
        width: 30,
        height: 30,
        margin: 4
    },
});
