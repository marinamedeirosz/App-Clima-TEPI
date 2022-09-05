import { View, Image, StyleSheet } from "react-native";
import Texto from "../componentes/Texto"


export default function ProxDia(props){
    return(
        <View style={styles.proxdiaView}>
            <Image style={styles.proxdiaImg} source={require("../../assets/sol.png")}></Image>
            <Texto style={styles.proxdiaTexto} texto={props.texto} cor={props.cor}></Texto>
            <Texto style={styles.proxdiaTexto} texto={props.texto2} cor={props.cor}></Texto>
        </View>
    )
}

const styles = StyleSheet.create({
    proxdiaView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    proxdiaImg: {
        width: 35,
        height: 35,
        margin: 10
    },
    proxdiaTexto: {
        margin: 10
    }
})