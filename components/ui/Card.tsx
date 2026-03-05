import Colors from '@/constants/colors';
import { StyleSheet, View } from 'react-native';

export default function Card({ children }: any) {
    return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        marginTop: 30,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primary600,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
        gap: 8,
    },
});
