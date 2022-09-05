import { View, StyleSheet, Image} from "react-native";
import Local from "../componentes/Local"


export default function Menus(){
    return(
        <View style={styles.menus2View}>
            <Image style={styles.menus2Img} source={require("../../assets/seta-esquerda.png")} />
            <Local style={{fontSize: 15}} texto="Bandung, Indonesia"></Local>
        </View>
    )
}   

const styles = StyleSheet.create({
    menus2View: {
        flexDirection: "row",
        justifyContent: "flex-start"
    }, 
    menus2Img: {
        width: 20,
        height: 20,
        margin: 4
    }
})
