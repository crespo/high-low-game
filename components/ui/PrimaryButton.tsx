import Colors from '@/constants/colors';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function PrimaryButton({ children, onPress }: any) {
    return (
        <Pressable onPress={onPress}>
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>{children}</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: Colors.primary800,
        alignItems: 'center',
        padding: 8,
        borderRadius: 8,
        elevation: 2,
    },
    buttonText: {
        color: 'white',
    },
});
