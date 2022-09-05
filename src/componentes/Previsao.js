import { View, StyleSheet, Image} from "react-native";
import Texto from "./Texto";


let cor
let texto
let fonte
let texto2
let cor2

export default function Previsao(props){
    cor=props.cor
    cor2=props.cor2
    texto=props.t1
    fonte=props.fonte
    texto2=props.t2
    
    return(
        <View style={[styles.previsaoView, {backgroundColor: cor2}]}>
            <Texto texto={texto} cor="#808080" fonte="10"></Texto>
            <Image style={styles.previsaoImg} source={require("../../assets/nuvem.png")} />
            <Texto texto={texto2} cor="#696969" fonte="15"></Texto>
        </View>
    )
}   

const styles = StyleSheet.create({
    previsaoView: {
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#DCDCDC",
        borderRadius: 10,
        margin: 10,
        alignItems: "center"
    },
    previsaoImg: {
        width: 40,
        height: 40,
        margin: 5
    },
})
