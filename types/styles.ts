import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  backgroundColor: '#fff',
	  alignItems: 'center',
	  //justifyContent: 'center',
	},
    heading: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black', 
        margin: 30,
    },
    button: {
        backgroundColor: 'orange',
        margin: 5,
        padding: 10,
        borderRadius: 5
    },
    confirmButton: {
        backgroundColor: 'orange',
        padding: 5,
        margin: 5,
        borderRadius: 5
    },
    text: {
        fontSize: 24,
    },
    input: {
        backgroundColor: 'gray', 
        padding: 15,
        margin: 10,
        borderRadius: 5,
        alignItems: 'stretch',
        width: '40%'
    },
    error: {
        fontSize: 20,
        color: 'red',
    },
    fieldView: {
        textAlign: 'right',
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'yellow',
        borderRadius: 5,
        marginVertical: 3,
    },
    dropdown: {
        fontSize: 24,
        margin: 10,
        borderWidth: 1,
    },
    dropdownStyle: {
        minWidth: '30%'
    },
    dropdownText: {
        fontStyle: 'italic',
        fontSize: 20,
        margin: 5
    },
    inputView: {
        width: '100%',
        alignItems: 'center',
    }
});