import { View, Text, Touchable, TouchableOpacity } from "react-native";
import { styles } from "../types/styles";
import { PageProps, Pages } from "../types/types";


function Treatments({ setCurrentPage, setHistory }: PageProps) {

    const toAddTreatments = () => {
        setHistory(history => [...history, Pages.AddTreatments]);
        setCurrentPage(Pages.AddTreatments);
    }

    const toViewTreatments = () => {
        setHistory(history => [...history, Pages.ViewTreatments]);
        setCurrentPage(Pages.ViewTreatments);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.heading}> Trattamenti </Text>
            <View>
                <TouchableOpacity onPress={() => toAddTreatments()} style={styles.button}>
                    <Text style={styles.text}> Aggiungi nuovo trattamento </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => toViewTreatments()} style={styles.button}>
                    <Text style={styles.text}> Visualizza trattamenti </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
} 

export default Treatments;