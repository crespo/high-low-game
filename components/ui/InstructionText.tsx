import Colors from '@/constants/colors';
import { StyleSheet, Text } from 'react-native';

export default function InstructionText({ children, style }: any) {
    return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'open-sans',
        color: Colors.primary800,
        fontSize: 22,
    },
});
