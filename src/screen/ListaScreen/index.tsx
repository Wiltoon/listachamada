import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './style';

export function ListaScreen(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Lista de Chamada</Text>
            <Text style={styles.subtitle}>Listar</Text>
            <View style={styles.inputLink} >
                <TextInput
                    style={styles.input}
                    placeholder="Buscar..."
                    placeholderTextColor="#838383"
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {}}
                />
            </View>
            
            <StatusBar style="auto" />
        </View>
    )
}