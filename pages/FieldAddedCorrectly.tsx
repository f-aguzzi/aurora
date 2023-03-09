import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../types/styles";
import { PageProps, Pages } from "../types/types";


function FieldAddedCorrectly({ setCurrentPage, setHistory }: PageProps) {

	const anotherField = () => {
		setHistory(history => [...history, Pages.AddFields]);
		setCurrentPage(Pages.AddFields);
	}

	const toMenu = () => {
		setHistory(history => [...history, Pages.MainMenu]);
		setCurrentPage(Pages.MainMenu);
	}

	return (
		<View style={styles.container}>
			<Text style={styles.heading}> Arnia inserita correttamente. </Text>
			<View>
				<TouchableOpacity onPress={() => anotherField()} style={styles.button} >
					<Text style={styles.text}> Inserisci un'altra arnia </Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => toMenu()} style={styles.button} >
					<Text style={styles.text}> Torna al menu principale </Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

export default FieldAddedCorrectly;