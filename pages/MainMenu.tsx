import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { Pages } from "../types/types";
import { styles } from "../types/styles";

interface MainMenuProps {
    setCurrentPage: React.Dispatch<React.SetStateAction<Pages>>;
}

export default function MainMenu({ setCurrentPage }: MainMenuProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Menu principale</Text>
            <View>
                <TouchableOpacity onPress={() => setCurrentPage(Pages.Hives)} style={styles.button} >
                    <Text style={styles.text}> Arnie </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}> Trattamenti </Text>
                </TouchableOpacity>
            </View>
        </View>
        
    )
}
