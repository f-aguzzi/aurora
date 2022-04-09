import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../types/styles";
import { Pages } from "../types/types";

interface TreatmentAddedCorrectlyProps {
    setCurrentPage: React.Dispatch<React.SetStateAction<Pages>>;
}

function TreatmentAddedCorrectly({ setCurrentPage }: TreatmentAddedCorrectlyProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}> Trattamento inserito correttamente. </Text>
            <View>
                <TouchableOpacity onPress={() => setCurrentPage(Pages.AddTreatments)} style={styles.button} >
                    <Text style={styles.text}> Inserisci un altro trattamento </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setCurrentPage(Pages.MainMenu)} style={styles.button} >
                    <Text style={styles.text}> Torna al menu principale </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default TreatmentAddedCorrectly;