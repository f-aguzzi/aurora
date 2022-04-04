import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../types/styles";

function Hives() {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}> Arnie </Text>
            <View>
                <TouchableOpacity style={styles.button} >
                    <Text style={styles.text}> Visualizza arnie </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} >
                    <Text style={styles.text}> Aggiungi arnia </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Hives;