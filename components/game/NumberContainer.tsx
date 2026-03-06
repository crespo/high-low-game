import Colors from '@/constants/colors';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

export default function NumberContainer({ children }: any) {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    );
}

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: Colors.primary800,
        padding: deviceWidth < 380 ? 12 : 24,
        margin: 24,
        borderRadius: 300,
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberText: {
        color: Colors.primary600,
        fontSize: 36,
        fontFamily: 'open-sans-bold',
    },
});
