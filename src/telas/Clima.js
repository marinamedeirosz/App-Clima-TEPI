import { StyleSheet, View, Image } from "react-native";
import Texto from "../componentes/Texto";
import Detalhes from "../componentes/Detalhes";
import Temperatura from "../componentes/Temperatura";


export default function Local(props) {
  return (
    <View style={styles.climaView}>
        <Image style={styles.climaImg} source={require("../../assets/dia-nublado.png")} />
        <Texto texto="Heavy Rain" cor="#F8FFFF" fonte="22"></Texto>
        <Texto texto="Sunday, 02 Oct" cor="#7ea1e6" fonte="18"></Texto>
        <Temperatura t="24°"></Temperatura>
        <Detalhes></Detalhes> 
    </View>
  );
}

const styles = StyleSheet.create({
    climaView: {
        backgroundColor: "#437AFF",
        borderRadius: 10,
        margin: 10, 
        alignItems: "center"
    }, 
    climaImg: {
        width: 50,
        height: 50,
        margin: 20
    } 
  },
);
