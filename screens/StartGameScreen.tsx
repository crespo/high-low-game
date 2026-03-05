import Card from '@/components/ui/Card';
import InstructionText from '@/components/ui/InstructionText';
import Title from '@/components/ui/Title';
import Colors from '@/constants/colors';
import { useState } from 'react';
import { Alert, StyleSheet, TextInput, View } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';

export default function StartGameScreen({ onPickedNumber }: any) {
    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredText: string) {
        setEnteredNumber(enteredText);
    }

    function resetEnteredNumber() {
        setEnteredNumber('');
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid number!', 'Number has to be between 1 and 99.', [
                { text: 'Okay', style: 'destructive', onPress: resetEnteredNumber },
            ]);
            return;
        }

        onPickedNumber(chosenNumber);
    }

    return (
        <View style={styles.container}>
            <Title>Guess a Number</Title>
            <Card>
                <InstructionText>Enter a Number</InstructionText>
                <TextInput
                    style={styles.guessInput}
                    maxLength={2}
                    keyboardType="number-pad"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={numberInputHandler}
                    value={enteredNumber}
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={resetEnteredNumber}>Reset</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center',
    },
    guessInput: {
        height: 60,
        width: 70,
        fontSize: 32,
        borderBottomColor: Colors.primary800,
        borderBottomWidth: 2,
        color: Colors.primary800,
        marginVertical: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
        gap: 8,
    },
    buttonContainer: {
        flex: 1,
    },
});
