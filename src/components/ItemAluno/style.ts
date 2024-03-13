import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFF',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10
    },
    nome:{
        fontSize: 20,
        fontWeight: 'bold'
    },
    registro: {
        color: '#838383'
    },
    button: {
        height: 45,
        width: 45,
        backgroundColor: '#E54343',
        borderRadius: 5
    }
});