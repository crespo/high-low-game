import GuessLogItem from '@/components/game/GuessLogItem';
import NumberContainer from '@/components/game/NumberContainer';
import Card from '@/components/ui/Card';
import InstructionText from '@/components/ui/InstructionText';
import PrimaryButton from '@/components/ui/PrimaryButton';
import Title from '@/components/ui/Title';
import { useEffect, useState } from 'react';
import { Alert, FlatList, StyleSheet, useWindowDimensions, View } from 'react-native';

function generateRandomBetween(min: any, max: any, exclude: any) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({ userNumber, onGameOver }: any) {
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([initialGuess]);
    const { height } = useWindowDimensions();

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver(guessRounds.length);
            minBoundary = 1;
            maxBoundary = 100;
        }
    }, [currentGuess, userNumber, onGameOver, guessRounds]);

    function nextGuessHandler(direction: string) {
        if (
            (direction === 'lower' && currentGuess < userNumber) ||
            (direction === 'greater' && currentGuess > userNumber)
        ) {
            Alert.alert('Oops!', 'Are you sure???', [{ text: 'Try again', style: 'cancel' }]);
            return;
        }
        if (direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber);
        setGuessRounds((prevGuessRounds) => [newRndNumber, ...prevGuessRounds]);
    }

    const guessRoundsListLength = guessRounds.length;
    const marginTopDistance = height < 400 ? 20 : 20;

    return (
        <View style={[styles.container, { marginTop: marginTopDistance }]}>
            <View style={styles.guessContainer}>
                <View style={styles.guessContainerTitle}>
                    <Title style={styles.title}>I guess your number is:</Title>
                </View>
                <View style={styles.guessContainerNumber}>
                    <NumberContainer>{currentGuess}</NumberContainer>
                </View>
            </View>
            <Card>
                <InstructionText style={styles.instructionText}>This number is </InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={() => nextGuessHandler('lower')}>
                            Greater
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={() => nextGuessHandler('greater')}>
                            Lower
                        </PrimaryButton>
                    </View>
                </View>
                <InstructionText style={styles.instructionText}>than my number </InstructionText>
            </Card>

            <View style={styles.listContainer}>
                <FlatList
                    data={guessRounds}
                    renderItem={(itemData) => (
                        <GuessLogItem
                            roundNumber={guessRoundsListLength - itemData.index}
                            guess={itemData.item}
                        />
                    )}
                    keyExtractor={(item) => item}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
    },
    guessContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    guessContainerTitle: {
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    guessContainerNumber: {
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    title: {
        marginTop: 54,
        borderWidth: 0,
    },
    instructionText: {
        fontSize: 18,
        marginHorizontal: 12,
    },
    buttonsContainer: {
        flexDirection: 'row',
        gap: 8,
    },
    buttonContainer: {
        flex: 1,
    },
    listContainer: {
        flex: 5,
        padding: 8,
        margin: 8,
    },
});
