import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { PageProps, Pages } from "../types/types";
import { styles } from "../types/styles";


export default function MainMenu({ setCurrentPage, setHistory }: PageProps) {

    const toFields = () => {
        setHistory(history => [...history, Pages.Fields]);
        setCurrentPage(Pages.Fields);
    }

    const toTreatments = () => {
        setHistory(history => [...history, Pages.Treatments]);
        setCurrentPage(Pages.Treatments);
    }
    

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Menu principale</Text>
            <View>
                <TouchableOpacity onPress={() => toFields()} style={styles.button} >
                    <Text style={styles.text}> Campi </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => toTreatments()} style={styles.button}>
                    <Text style={styles.text}> Trattamenti </Text>
                </TouchableOpacity>
            </View>
        </View>
        
    )
}
