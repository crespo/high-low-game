import { StyleSheet, Text } from 'react-native';

export default function Title({ children, style }: any) {
    return (
        <>
            <Text style={[styles.title, style]}>{children}</Text>
        </>
    );
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'white',
        padding: 12,
        maxWidth: '80%',
        width: 300,
    },
});
