import { View, StyleSheet } from "react-native-web";
import ProxDia from "../componentes/ProxDia";
import Texto from "../componentes/Texto";
import Menus2 from "../telas/Menus2";


export default function Visor2(){
    return(
        <View style={styles.visor2View}>
            <Menus2></Menus2>
            <Texto style={styles.visor2Text} texto="Next 7 Days" cor="#FEFFFF" fonte="20"></Texto>
            <ProxDia texto="Monday, 3 Oct" texto2="32 / 31°" cor="#FEFFFF"></ProxDia>
            <ProxDia texto="Tuesday, 4 Oct" texto2="22 / 23°" cor="#FEFFFF"></ProxDia>
            <ProxDia texto="Wednesday, 5 Oct" texto2="30 / 31°" cor="#FEFFFF"></ProxDia>
            <ProxDia texto="Thursday, 6 Oct" texto2="24 / 26°" cor="#FEFFFF"></ProxDia>
            <ProxDia texto="Friday, 7 Oct" texto2="26 / 27°" cor="#FEFFFF"></ProxDia>
            <ProxDia texto="Saturday, 8 Oct" texto2="27 / 28°" cor="#FEFFFF"></ProxDia>
            <ProxDia texto="Sunday, 9 Oct" texto2="22 / 23°" cor="#FEFFFF"></ProxDia>
        </View>
    )
}

const styles = StyleSheet.create({
    visor2View: {
        backgroundColor: "#437AFF"
    },
    visor2Text: {
        
    }
});