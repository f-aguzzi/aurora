import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../types/styles";
import { Pages } from "../types/types";

interface HiveAddedCorrectlyProps {
    setCurrentPage: React.Dispatch<React.SetStateAction<Pages>>;
}

function HiveAddedCorrectly({ setCurrentPage }: HiveAddedCorrectlyProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}> Arnia inserita correttamente. </Text>
            <View>
                <TouchableOpacity onPress={() => setCurrentPage(Pages.AddHives)} style={styles.button} >
                    <Text style={styles.text}> Inserisci un'altra arnia </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setCurrentPage(Pages.MainMenu)} style={styles.button} >
                    <Text style={styles.text}> Torna al menu principale </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HiveAddedCorrectly;