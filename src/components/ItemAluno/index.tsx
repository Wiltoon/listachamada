import { styles } from './style';

import { View, Text, TouchableOpacity } from 'react-native';

export function ItemAluno(){
    return(
        <View style={styles.item}>
            <View >
                <Text style={styles.nome}>Aluno 1</Text>
                <Text style={styles.registro}>2020 2020 2020</Text>
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {}}
            />
        </View>
    )
}