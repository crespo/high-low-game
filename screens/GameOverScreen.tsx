import PrimaryButton from '@/components/ui/PrimaryButton';
import Title from '@/components/ui/Title';
import Colors from '@/constants/colors';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function GameOverScreen({ roundsPlayed, userNumber, onRestart }: any) {
    return (
        <View style={styles.container}>
            <Title>GAME OVER!</Title>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('@/assets/images/success.png')} />
            </View>
            <Text style={styles.summaryText}>
                Your phone needed <Text style={styles.highlight}>{roundsPlayed}</Text> rounds to
                guess the number <Text style={styles.highlight}>{userNumber}</Text>.
            </Text>
            <PrimaryButton onPress={onRestart}>Start New Game</PrimaryButton>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageContainer: {
        overflow: 'hidden',
        width: 200,
        height: 200,
        borderRadius: 100,
        borderWidth: 3,
        borderColor: Colors.primary800,
        margin: 36,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 20,
        marginBottom: 24,
    },
    highlight: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary500,
    },
});
