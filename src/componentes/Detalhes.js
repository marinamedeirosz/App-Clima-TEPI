import { StyleSheet, View, Image, Dimensions } from "react-native";
import Texto from "./Texto";


export default function Detalhes(props) {
    return (
        <View style={styles.detalhesView}>
            <Image style={styles.detalhesImg} source={require("../../assets/vento.png")} />
            <View id="text"style={styles.detalhesView2}>    
                <Texto style={styles.detalhesText} texto="WIND" cor="#7EB1FF"></Texto>
                <Texto style={styles.detalhesText} texto="19.2 km/j" cor="#FEFFFF"></Texto>
            </View>
        </View>
  );
}

const styles = StyleSheet.create({
    detalhesView: {
        flexDirection: "row",
        margin: 4
    },
    detalhesView2:{
        margin: 2,
        alignItems: "flex-start"
    },
    detalhesImg: {
        width: 40,
        height: 40
    },
    detalhesText: {
        fontSize: 12,
        margin: 2,
        marginLeft: 2
    }
});
