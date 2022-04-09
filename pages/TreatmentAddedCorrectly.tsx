import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../types/styles";
import { PageProps, Pages } from "../types/types";



function TreatmentAddedCorrectly({ setCurrentPage, setHistory }: PageProps) {

    const toAddTreatments = () => {
        setHistory(history => [...history, Pages.AddTreatments]);
        setCurrentPage(Pages.AddTreatments);
    }

    const toMainMenu = () => {
        setHistory(history => [...history, Pages.MainMenu]);
        setCurrentPage(Pages.MainMenu);
    }
    return (
        <View style={styles.container}>
            <Text style={styles.heading}> Trattamento inserito correttamente. </Text>
            <View>
                <TouchableOpacity onPress={() => toAddTreatments()} style={styles.button} >
                    <Text style={styles.text}> Inserisci un altro trattamento </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => toMainMenu()} style={styles.button} >
                    <Text style={styles.text}> Torna al menu principale </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default TreatmentAddedCorrectly;