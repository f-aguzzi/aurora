import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  backgroundColor: '#fff',
	  alignItems: 'center',
	  justifyContent: 'center',
	},
    heading: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black', 
        margin: 30,
    },
    button: {
        backgroundColor: 'yellow',
        margin: 5,
        padding: 10,
        borderRadius: 5
    },
    confirmButton: {
        backgroundColor: 'green',
        padding: 5,
        margin: 5,
        borderRadius: 5
    },
    text: {
        fontSize: 24
    },
    input: {
        backgroundColor: 'gray', 
        padding: 15,
        margin: 10,
        borderRadius: 5
    },
    error: {
        fontSize: 20,
        color: 'red',
    },
    hiveView: {
        textAlign: 'right',
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'yellow',
        borderRadius: 5,
        marginVertical: 3,
    }
});