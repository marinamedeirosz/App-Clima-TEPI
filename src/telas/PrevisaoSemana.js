import { StyleSheet, View } from "react-native";
import Previsao from "../componentes/Previsao";


export default function PrevisaoSemana() {
  return (
    <View style={styles.psemanaView}>
        <Previsao cor="#FEFFFF" cor2="#437AFF" t1="12:00" t2="Now" ></Previsao>
        <Previsao t1="14:00" t2="22°" ></Previsao>
        <Previsao t1="16:00" t2="26°" ></Previsao>
        <Previsao t1="18:00" t2="25°" ></Previsao>
        <Previsao t1="20:00" t2="31°" ></Previsao>
        <Previsao t1="22:00" t2="28°" ></Previsao>
    </View>
  );
}

const styles = StyleSheet.create({
    psemanaView: {
        flexDirection: "row",
        justifyContent: "flex-start",
        overflowX: "auto",
        alignItems: "flex-start",
        margin: 5,
    }
});