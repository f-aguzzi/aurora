import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../types/styles";
import { Pages } from "../types/types";

interface HivesInterface {
    setCurrentPage: React.Dispatch<React.SetStateAction<Pages>>;
}

function Hives({ setCurrentPage }: HivesInterface) {

    return (
        <View style={styles.container}>
            <Text style={styles.heading}> Arnie </Text>
            <View>
                <TouchableOpacity style={styles.button} onPress={() => setCurrentPage(Pages.ViewHives)} >
                    <Text style={styles.text}> Visualizza arnie </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => setCurrentPage(Pages.AddHives)} >
                    <Text style={styles.text}> Aggiungi arnia </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Hives;